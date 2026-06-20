
import {lazy, Suspense} from 'react'
import  Layout  from "./components/Layout/Layout"
import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './pages/Login/Login'

const Dashboard = lazy(()=>import ('./pages/Dashboard/Dashboard'))
const Users = lazy(()=> import('./pages/Users/Users'))
const Products = lazy(()=> import ('./pages/Products/Products'))
const Settings = lazy (()=> import ('./pages/Settings/Settings'))
const Cart = lazy (()=> import ('./pages/Cart/Cart'))

function App() {
  return (<Suspense fallback = {
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500">Loading...</p>
    </div>}>
    <Routes>
      <Route path="/login" element={<Login/>}/>

      <Route path="/" element={
        <ProtectedRoute>
          <Layout>
            <Dashboard/>
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/users" element={
        <ProtectedRoute>
          <Layout>
            <Users/>
          </Layout>
        </ProtectedRoute>
      }/>
      <Route path="/products" element={
        <ProtectedRoute>
          <Layout>
            <Products/>
          </Layout>
        </ProtectedRoute>
      }/>
      <Route path="/cart" element={
        <ProtectedRoute>
          <Layout>
            <Cart/>
          </Layout>
        </ProtectedRoute>
      }/>
      <Route path="/settings" element={
        <ProtectedRoute>
          <Layout>
            <Settings/>
          </Layout>
        </ProtectedRoute>
      }/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>\
      </Suspense>
  )
}
  
export default App