import { useTheme } from "../../hooks/useThem";

function TopBar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <h1 className="fint-seimbold text-gray-700 dark:text-gray-200">
        Dashboard
      </h1>
      <div className="flex items-center gap-4">
        {" "}
        <button className="relative text-gray-500 dark:text-gray-400  hover:text-gray-700 dark:hover:text-gray-200">
          🔔
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default TopBar;
