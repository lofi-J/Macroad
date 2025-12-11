import { createContext, useContext, useEffect, useState } from "react";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export type Theme = ThemeMode.LIGHT | ThemeMode.DARK | ThemeMode.SYSTEM;

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: ThemeMode.SYSTEM,
  setTheme: () => {},
});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || ThemeMode.SYSTEM
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ThemeMode.LIGHT, ThemeMode.DARK);

    if (theme === ThemeMode.SYSTEM) {
      const userSystemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? ThemeMode.DARK
        : ThemeMode.LIGHT;

      root.classList.add(userSystemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
