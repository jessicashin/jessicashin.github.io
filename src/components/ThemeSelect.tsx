import { useState } from "react";
import clsx from "clsx";
import { IconButton } from "./IconButton";

type ThemeOption = "light" | "dark" | "auto";

interface ThemeButtonProps {
  theme: ThemeOption;
  selected: boolean;
  onSelectChange: () => void;
}

const ThemeButton = (props: ThemeButtonProps) => (
  <IconButton
    className={clsx(
      "text-sm before:mr-1",
      props.selected ? "before:content-['■']" : "before:content-['□']"
    )}
    onClick={props.onSelectChange}
  >
    {props.theme}
  </IconButton>
);

export default function ThemeSelect(props: React.HTMLProps<HTMLDivElement>) {
  const [theme, setTheme] = useState<ThemeOption>(localStorage.theme || "auto");

  const saveTheme = (theme: ThemeOption) => {
    setTheme(theme);
    if (theme === "auto") {
      localStorage.removeItem("theme");
    } else {
      localStorage.theme = theme;
    }
  };

  const setLightTheme = (save?: boolean) => {
    document.documentElement.classList.remove("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#e7e5e4");
    save && saveTheme("light");
  };

  const setDarkTheme = (save?: boolean) => {
    document.documentElement.classList.add("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#1c1917");
    save && saveTheme("dark");
  };

  const setSystemTheme = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDarkTheme()
      : setLightTheme();
    saveTheme("auto");
  };

  return (
    <div className={props.className}>
      <div className="flex gap-4">
        <ThemeButton
          theme="light"
          selected={theme === "light"}
          onSelectChange={() => setLightTheme(true)}
        />
        <ThemeButton
          theme="dark"
          selected={theme === "dark"}
          onSelectChange={() => setDarkTheme(true)}
        />
        <ThemeButton
          theme="auto"
          selected={theme === "auto"}
          onSelectChange={setSystemTheme}
        />
      </div>
    </div>
  );
}
