import React, { useState, createContext } from 'react';

type Theme = "light" | "dark"
type ThemeContext = { theme: Theme; toggleTheme: () => void};

export const ThemeContext = createContext<ThemeContext>(
  {} as ThemeContext
)

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light")
  }

  const backgroundColor = theme === "light" ? "bg-slate-100" : "bg-slate-500";

  // document.body.className = color;
  document.body.className = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}