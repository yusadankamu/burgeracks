# THE BURGERACKS LANDING PAGE

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.9-4B32C3?logo=eslint&logoColor=white)

A modern, fast, and type-safe React landing page powered by Vite. This template provides a minimal yet powerful setup to kickstart React projects with the latest features.

## ✨ Features

- ⚡️ **Lightning Fast HMR** with [Vite](https://vitejs.dev)
- 🔑 **Type Safety** with [TypeScript](https://www.typescriptlang.org)
- 🎨 **Modern React** (v18.3) with Hooks and Function Components
- 🔍 **Advanced ESLint Configuration** with type-aware rules
- 🔄 **Fast Refresh** powered by [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)
- 📦 **Optimized Production Build**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
.
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # React components
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public static files
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── eslint.config.js   # ESLint configuration
```

## 🛠️ Development

### ESLint Configuration

This template includes a robust ESLint setup. For production applications, we recommend enabling type-aware lint rules:

1. Configure `parserOptions`:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Enable stricter type checking:
    - Use `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
    - Optionally add `tseslint.configs.stylisticTypeChecked`

3. Add React-specific rules:

```js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 🏗️ Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

MIT License © 2024
