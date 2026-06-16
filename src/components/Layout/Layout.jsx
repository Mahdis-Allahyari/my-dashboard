import SideBar from "../SideBar/SideBar"
import TopBar from "../TopBar/TopBar"
function Layout({children}) {
  return (
    <div className=" flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <SideBar/>
    
    <div className="flex flex-col flex-1 overflow-hidden">
<TopBar/>
<main className="flex-1 overflow-y-auto p-6">
    {children}
</main>
    </div>
    </div>
  )
}

export default Layout