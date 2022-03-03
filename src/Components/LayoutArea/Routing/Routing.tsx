import { Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from '../../AboutArea/About/About'
import ProductsList from '../../ProductsArea/ProductsList/ProductsList'
import ProductDetails from '../../ProductsArea/ProductDetails/ProductDetails'
import AddProduct from '../../ProductsArea/AddProduct/AddProduct'
import UpdateProduct from '../../ProductsArea/UpdateProduct/UpdateProduct'

function Routing(): JSX.Element {
  //! where does / suupsoded to be??????????????????? top or bottom 

  return (
    <Routes>
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
       
    
      <Route path="/about" element={<About />} />


      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
}

export default Routing;


