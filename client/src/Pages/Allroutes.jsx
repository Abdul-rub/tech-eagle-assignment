
import { Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"
import HomePage from "./HomePage"

import ManagerDashboard from "./ManagerDashboard"
import { useAuth } from "../context/AuthContext"
import Cart from "./Cart"
import PaymentSucess from "../components/PaymentSucess"
import Orders from "./Orders"
import AddProduct from "../components/AddProduct"

const Allroutes = () => {
    const {state} = useAuth()
   const role = localStorage.getItem('role')
   

   console.log(role, "ROLE")


   const renderDashboard = () => {
    if (state.isAuthenticated) {
      if (role === 'Customer') {
        return <HomePage />;
      } else if (role === 'Manager') {
        return <ManagerDashboard />;
      }
    }
    return <Login />;
  };
    

    return (
        <div>
            <Routes>
            <Route path="/" element={renderDashboard()} />
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/inventory" element={<ManagerDashboard />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart/:userId" element={<Cart/>}/>
                <Route path="/paymentSuccess" element={<PaymentSucess/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/addModal" element={<AddProduct/>}/>
            </Routes>
        </div>
    )
}

export default Allroutes