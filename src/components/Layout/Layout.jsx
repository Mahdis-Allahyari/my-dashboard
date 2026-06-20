import { useState } from "react"
import SideBar from "../SideBar/SideBar"
import TopBar from "../TopBar/TopBar"
function Layout({children}) {
  const [isMobileMenuOpen , setIsMobileMenuOpen]=useState(false)
  return (
    <div className=" flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
       {isMobileMenuOpen &&(
    <div className="fixed inset-0 bg-black/50 z-20 md:hidden"
    onClick={()=> setIsMobileMenuOpen(false)}/>
       )}
       {isMobileMenuOpen && (
  <div className="fixed inset-y-0 left-0 z-30 md:hidden">
    <SideBar onClose={() => setIsMobileMenuOpen(false)}  isMobile={true}/>
  </div>
)}
   <div className="hidden md:block">
  <SideBar onClose={() => setIsMobileMenuOpen(false)} />
</div>   
    
    <div className="flex flex-col flex-1 overflow-hidden min-w-0">
<TopBar onMenuClick={()=> setIsMobileMenuOpen(prev=> !prev)}/>
<main className="flex-1 overflow-y-auto p-6">
    {children}
</main>
    </div>
    </div>
  )
}

export default Layout