# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form → send to your email

This project uses **EmailJS** so the contact form can email you without running a backend server.

### 1) Create EmailJS Service + Template

1. Create an account at https://www.emailjs.com/
2. Add an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with variables like:
	- `from_name`
	- `reply_to`
	- `phone`
	- `subject`
	- `message`

### 2) Add environment variables

Create a `.env` file in the project root (same folder as `package.json`) based on `.env.example`:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Restart `npm run dev` after changing `.env`.

### 3) Run

```bash
npm run dev
```
