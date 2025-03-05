import { useEffect, useState } from "react";

const LOCAL_STORAGE_THEME_KEY = "theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const localValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return localValue !== null ? JSON.parse(localValue) : getPreferredTheme();
  });

  function getPreferredTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme));
    document.querySelector("html").dataset.theme = theme;
  }, [theme]);

  return { theme, handleTheme };
}
