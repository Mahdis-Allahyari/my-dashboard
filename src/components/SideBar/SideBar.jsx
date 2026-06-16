function SideBar() {
  const links = [
    { name: "Dashboard", icon: "📊" },
    { name: "Users", icon: "👥" },
    { name: "Products", icon: "📦" },
    { name: "Setting", icon: "⚙️" },
  ];
  return (
    <aside className=" w-56 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
      <div className="h-14 items-center px-6 border-b border-gray-200 dark:border-gray-700 mt-4 ">
        <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg ">
          MyApp
        </span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map((link) => (
          <a
            key={link.name}
            href="#"
            className="flex items-center gap-3 px-2 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
      <div className=" p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-300 dark:text-indigo-300">
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
