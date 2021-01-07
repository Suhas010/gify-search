import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
  dark: true,
  toggle: () => {},
});

const LIGHT = [
  '--app-background: white',
  '--text-color: black',
  '--table-row: #dddddd',
];
const DARK = [
  '--app-background: #022448',
  '--text-color: white',
  '--table-row: #454328',
];

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');
    const applyTheme = (theme) => {
      const root = document.getElementsByTagName('html')[0];
      root.style.cssText = theme.join(';');
    };

    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(DARK);
    } else {
      setDark(false);
      applyTheme(LIGHT);
    }
  }, [dark]);

  const toggle = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
