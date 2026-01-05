import { useEffect, useRef } from 'react';

/**
 * DriveGallery (utility component)
 * Props:
 * - folderId: Google Drive folder ID
 * - apiKey: Google API key with Drive API enabled
 * - onFiles(filesArray) => called with array of files [{id,name,mimeType}]
 * - pollInterval: ms, default 20000
 *
 * This component does not render UI; it fetches files and calls onFiles.
 */
export default function DriveGallery({ folderId, apiKey, onFiles, pollInterval = 20000, onError, onStart, onDone }) {
  const timerRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!folderId || !apiKey || typeof onFiles !== 'function') return;

    const fetchAllFiles = async () => {
      const files = [];
      let pageToken = undefined;
      const base = 'https://www.googleapis.com/drive/v3/files';

      do {
      // Build the q parameter using spaces (the Drive API expects e.g. "'FOLDER_ID' in parents and mimeType contains 'image/'")
      const qRaw = `'${folderId}' in parents and mimeType contains 'image/'`;
      const q = encodeURIComponent(qRaw);
      // thumbnailLink helps with reliable image rendering; webContentLink/webViewLink can be useful fallback URLs when available
      const fields = encodeURIComponent('nextPageToken,files(id,name,mimeType,thumbnailLink,webContentLink,webViewLink)');
      const pageParam = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '';
      // supportsAllDrives/includeItemsFromAllDrives makes folder listing work for Shared Drives too
      const url = `${base}?q=${q}&key=${apiKey}&fields=${fields}${pageParam}&orderBy=name&supportsAllDrives=true&includeItemsFromAllDrives=true`;

        const controller = new AbortController();
        abortRef.current = controller;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error('Drive API error ' + res.status);
        const json = await res.json();
        if (Array.isArray(json.files)) files.push(...json.files);
        pageToken = json.nextPageToken;
      } while (pageToken);

      return files;
    };

    let mounted = true;

    const load = async () => {
      try {
        if (typeof onStart === 'function') onStart();
        const files = await fetchAllFiles();
        if (mounted) onFiles(files || []);
        if (typeof onDone === 'function') onDone();
      } catch (err) {
        // If the fetch was aborted due to component unmount or change, ignore it
        if (err && err.name === 'AbortError') {
          // do not call onError for intentional aborts
          return;
        }
        if (typeof onError === 'function') onError(err.message || String(err));
      }
    };

    load();
    if (pollInterval > 0) {
      timerRef.current = setInterval(load, pollInterval);
    }

    return () => {
      mounted = false;
      if (timerRef.current) clearInterval(timerRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
  }, [folderId, apiKey, onFiles, pollInterval, onError, onStart, onDone]);

  return null;
}
