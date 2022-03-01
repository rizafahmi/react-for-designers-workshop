import React from 'react';
import useTheme, { themes } from './ThemeContext'

function ToggleButton() {
    const [ theme, setTheme ] = useTheme()
    function handleToggleButton() {
        setTheme(theme == themes.light ? themes.dark : themes.light)
        console.log(theme)
        document.body.className = theme.background;
        console.log(theme)
    }

    return (
        <button onClick={handleToggleButton} className="bg-slate-800">Toggle Mode</button>
    )
}

export default ToggleButton
