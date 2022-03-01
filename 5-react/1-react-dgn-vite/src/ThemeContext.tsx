import React, { useState, createContext, useContext } from "react";

export const themes = {
    light: {
      color: "text-red-600",
      background: "bg-red-100"
    },
    dark: {
      color: "text-red-200",
      background: "bg-slate-800"
    }
}

const initialState = {
    theme: themes.light,
    setTheme: () => {}
}

const ThemeContext = createContext(initialState)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

const useTheme = () => {

    const context = useContext(ThemeContext);

    if (context == undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
  console.log(context)
    return [context.theme, context.setTheme];
};

export default useTheme;
