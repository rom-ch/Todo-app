import { useTheme } from "../hooks/useTheme";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

export function Header() {
  const { theme, handleTheme } = useTheme();

  return (
    <header className="mx-auto flex max-w-lg items-center justify-between">
      <h1 className="text-3xl font-semibold tracking-[.3em] text-white sm:text-4xl">
        TODO
      </h1>
      <button
        onClick={handleTheme}
        className="focus:ring-gradient-2 size-6 cursor-pointer rounded-md focus:ring-2 focus:outline-none sm:size-7"
      >
        <img src={theme === "dark" ? sunIcon : moonIcon} alt="Switch theme" />
      </button>
    </header>
  );
}
