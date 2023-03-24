import { Fragment, useState } from "react";
import clsx from "clsx";
import { IconButton } from "./IconButton";
import { Listbox, Transition } from "@headlessui/react";

const themeOptions = ["light", "dark", "auto"] as const;
type ThemeOption = typeof themeOptions[number];

interface ThemeButtonProps extends React.ComponentPropsWithRef<"button"> {
  theme: ThemeOption;
  selected: boolean;
}

const ThemeButton = ({ theme, selected, ...props }: ThemeButtonProps) => (
  <IconButton
    className={clsx(
      "text-sm before:mr-1",
      selected ? "before:content-['■']" : "before:content-['□']"
    )}
    {...props}
  >
    {theme}
  </IconButton>
);

export default function ThemeSelect(props: React.HTMLProps<HTMLDivElement>) {
  const [selectedTheme, setSelected] = useState<ThemeOption>(
    localStorage.theme || "auto"
  );

  const saveTheme = (theme: ThemeOption) => {
    setSelected(theme);
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

  const selectTheme = (theme: ThemeOption) => {
    switch (theme) {
      case "light":
        setLightTheme(true);
        break;
      case "dark":
        setDarkTheme(true);
        break;
      case "auto":
        setSystemTheme();
    }
  };

  return (
    <div className={props.className}>
      <Listbox
        as="div"
        className="relative sm:hidden"
        value={selectedTheme}
        onChange={selectTheme}
      >
        <Listbox.Button
          as={IconButton}
          className="text-sm before:mr-2 before:content-['◑'] focus:outline-none"
        >
          Theme
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 mt-3 divide-y divide-stone-400/25 border border-stone-800 bg-white/95 px-2 py-1 focus:outline-none dark:divide-stone-500/25 dark:border-stone-300 dark:bg-stone-800/95">
            {themeOptions.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ selected }) =>
                  clsx(
                    "grid cursor-default select-none grid-cols-[12px_1fr_12px] items-center py-1 text-center text-sm uppercase",
                    selected && "before:text-xs before:content-['▸']"
                  )
                }
              >
                <span className="col-start-2">{option}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>

      <div className="hidden gap-4 sm:flex">
        {themeOptions.map((option) => (
          <ThemeButton
            key={option}
            theme={option}
            selected={option === selectedTheme}
            onClick={() => selectTheme(option)}
          />
        ))}
      </div>
    </div>
  );
}
