import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
function SideBar({ onClose , isMobile }) {
  const getTotalItems = useCartStore(state => state.getTotalItems)
  const links = [
    { name: "Dashboard", icon: "📊", path: '/' },
    { name: "Users", icon: "👥", path: '/users' },
    { name: "Products", icon: "📦", path: '/products' },
    { name: "Cart", icon: "🛒", path: '/cart' },
    { name: "Setting", icon: "⚙️", path: '/settings' },

  ];
  return (
    <aside className={`w-56 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-col ${isMobile ? 'flex' : 'hidden md:flex'}`}>

  <div className="h-14 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
    <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
      MyApp
    </span>
  </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-150 ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            } >
            <span>{link.icon}</span>
            <span className="flex-1">{link.name}</span>
            {link.name === 'Cart' && getTotalItems() > 0 && (
              <span className="w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className=" p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-sm font-bold text-indigo-600 dark:text-indigo-300">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Mahdis Dev
            </p>
            <p className="text-xs text-gray-400">Junior Frontend</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
