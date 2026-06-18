
import {lazy, Suspense} from 'react'
import  Layout  from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"

const Dashboard = lazy(()=>import ('./pages/Dashboard/Dashboard'))
const Users = lazy(()=> import('./pages/Users/Users'))
const Products = lazy(()=> import ('./pages/Products/Products'))
const Settings = lazy (()=> import ('./pages/Settings/Settings'))
const Cart = lazy (()=> import ('./pages/Cart/Cart'))

function App() {
  return (
   <Layout>
    <Suspense fallback ={
      <div className="flex items-center justify-center h-full">
        <p className=" text-gray-500">Loading...</p>
      </div>
    }>
    <Routes>
<Route path = "/" element = {<Dashboard/>}/>
<Route path = "/users" element = {<Users/>}/>
<Route path = "/products" element = {<Products/>}/>
<Route path = "/settings" element = {<Settings/>}/>
<Route path = "/cart" element = {<Cart/>}/>
    </Routes>
    </Suspense>
   </Layout> 
  )
}

export default App