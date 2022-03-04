import { Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from '../../AboutArea/About/About'
import ProductsList from '../../ProductsArea/ProductsList/ProductsList'
import ProductDetails from '../../ProductsArea/ProductDetails/ProductDetails'
import AddProduct from '../../ProductsArea/AddProduct/AddProduct'
import UpdateProduct from '../../ProductsArea/UpdateProduct/UpdateProduct'

import Register from '../../AuthArea/Register/Register'
import Login from '../../AuthArea/Login/Login'
import Logout from '../../AuthArea/Logout/Logout'

import EmployeesList from '../../EmployeesArea/EmployeesList/EmployeesList'
import EmployeeDetails from '../../EmployeesArea/EmployeeDetails/EmployeeDetails'
import AddEmployee from '../../EmployeesArea/AddEmployee/AddEmployee'
import UpdateEmployee from '../../EmployeesArea/UpdateEmployee/UpdateEmployee'

function Routing(): JSX.Element {
  //! where does / suupsoded to be??????????????????? top or bottom 

  return (
    <Routes>
 {/* basically the Route just reads whats above and goes to theat component.. we use Navlinks to change the route on top and then route sees the route on top and goes to that compnent  */}
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login />} />
       <Route path="/logout" element={<Logout />} />







      <Route path="/home" element={<Home />} />
      {/* Default path  */}
      {/* <Route path='/' element={<Navigate to="/home"/>} /> */}
      <Route path='/' element={<Home />} />


      {/* //products  */}
      <Route path="/products" element={<ProductsList />} />
      {/* Route paramter the :id is the Route parameter  */}
      <Route path="/products/details/:id" element={<ProductDetails />} />
      {/* Handle Form  */}
      <Route path ="/products/new" element={<AddProduct/>}/>
      {/* Update Product */}
      <Route path ="/products/edit/:id" element={<UpdateProduct/>} />

      <Route path="/employees" element={<EmployeesList/>}/>
      <Route path="/employees/new" element={<AddEmployee />} />
      <Route path="/employees/details/:id" element={<EmployeeDetails/>} />
      <Route path="/employees/edit/:id" element={<UpdateEmployee/>} />
       
    
      <Route path="/about" element={<About />} />


      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
}

export default Routing;


