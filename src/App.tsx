import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import {
  createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider,
} from 'react-router-dom';

import Main from './components/Main';
import ToggleTheme from './components/ui/ToggleTheme';
import QuizProvider from './context/QuizProvider';
import { GlobalStyles } from './styles/Global';
import { themes } from './styles/Theme';
import NavBar from './components/ui/NavBar';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setCurrentTheme(checked ? 'dark' : 'light');
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  const theme = currentTheme === 'light' ? themes.light : themes.dark;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    )
  );

  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.navigate('/dashboard');
    }
  }, [isSignedIn, router]);

  return (
    <>
      <RouterProvider router={router} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QuizProvider>
          <ToggleTheme
            onChange={toggleTheme}
            currentTheme={currentTheme}
            checked={currentTheme === 'dark'}
            id="toggleTheme"
            value="theme"
          />
          <Main />
        </QuizProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
