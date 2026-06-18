import  Layout  from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Users from "./pages/Users"
import Products from "./pages/Products/Products"
import Settings from "./pages/Settings/Settings"
import Cart from "./pages/Cart/Cart"

function App() {
  return (
   <Layout>
    <Routes>
<Route path = "/" element = {<Dashboard/>}/>
<Route path = "/users" element = {<Users/>}/>
<Route path = "/products" element = {<Products/>}/>
<Route path = "/settings" element = {<Settings/>}/>
<Route path = "/cart" element = {<Cart/>}/>
    </Routes>
   </Layout> 
  )
}

export default App