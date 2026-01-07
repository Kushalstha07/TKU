import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
    // Also try with document.documentElement
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // In case the scroll is localized to the root or app element
    const root = document.getElementById('root');
    if (root) root.scrollTop = 0;

    const app = document.querySelector('.app');
    if (app) app.scrollTop = 0;
  }, [pathname]);

  return null;
}
