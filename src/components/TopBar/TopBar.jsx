import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useAuthStore } from "../../store/authStore";

function TopBar({onMenuClick}) {
  const { isDark, toggleTheme } = useTheme();
  const logout = useAuthStore(state => state.logout)
  const user = useAuthStore(state => state.user)
  const navigate = useNavigate()
  const location = useLocation()
  function handleLogout() {
    logout()
    navigate('/login')
  }
    function getPageTitle(){
      const paths = {
        '/':'Dashboard',
        '/users':'Users',
'/products':'Products',
'/cart':'Cart',
'/settings': 'Settings'

}
return paths [location.pathname] || 'Dashboard'
    }
 
  return (
    <header className="h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <div className=" flex item-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden w-9 h-9 flex item-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="text-gray-600 dark:text-gray-300 text-xl">
            ☰
          </span>
        </button>
        <h1 className="font-seimbold text-gray-700 dark:text-gray-200">
          {getPageTitle()}
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <span className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
          {user?.name}
        </span>
        <button className="relative text-gray-500 dark:text-gray-400  hover:text-gray-700 dark:hover:text-gray-200">
          🔔
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150"
        >
          {isDark ? "☀️" : "🌙"}
<span className="hidden md:block">{isDark ? 'Light': 'Dark'}</span>
        </button>
        <button
          onClick={handleLogout}
          className="flex item-center gap-2 px-2 py-1.5 rounded-md ng-red-50 dark:bg-red-900/20 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-150">
          <span>🚪</span>
          <span className="hidden mf:block">Logout</span>
        </button>
      </div>
    </header>
  );
}

export default TopBar;
