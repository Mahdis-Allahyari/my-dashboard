import  Layout  from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Users from "./pages/Users"
import Products from "./pages/Products/Products"
import Settings from "./pages/Settings/Settings"

function App() {
  return (
   <Layout>
    <Routes>
<Route path = "/" element = {<Dashboard/>}/>
<Route path = "/users" element = {<Users/>}/>
<Route path = "/products" element = {<Products/>}/>
<Route path = "/settings" element = {<Settings/>}/>
    </Routes>
   </Layout> 
  )
}

export default App