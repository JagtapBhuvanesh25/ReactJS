import { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/Theme';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  // Inject theme class into HTML tag
  useEffect(() => {
    const palate = document.querySelector('html').classList;
    palate.remove("light", "dark");
    palate.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;