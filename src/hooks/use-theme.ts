import { useEffect, useState } from "react";

const useTheme = (): string => {
  // Initialize with a function to prevent hydration mismatch
  // Using globalThis for cross-runtime compatibility (Node, Bun, Deno)
  const [themeValue, setThemeValue] = useState(() => {
    if (typeof globalThis.document !== "undefined") {
      return globalThis.document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    setThemeValue(
      globalThis.document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    );
  }, []);

  return themeValue;
};

export default useTheme;
