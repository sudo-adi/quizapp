import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';
import { P } from '@clerk/clerk-react/dist/controlComponents-CzpRUsyv';

// Ensure the environment variable is defined
// if (!process.env) {
//   throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not defined");
// }

const REACT_APP_CLERK_PUBLISHABLE_KEY: string = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY as string;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
