import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notify from "../../../Services/NotifyService";
import productsService from "../../../Services/productsService";
import "./AddProduct.css";

import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function AddProduct(): JSX.Element {

const {register, handleSubmit} = useForm<ProductModel>()
const navigate = useNavigate()


async function submit(product: ProductModel) {
    try {
        
        // console.log("product before", product);  {name: 'jack', price: '123', stock: '121'}
        await productsService.addNewProduct(product)
        // console.log("product after", addedProduct); {id: 143, name: 'jack', price: '123', stock: '121'}

        notify.success('Product has been added!')

        navigate('/products')

    } catch(err: any) {
        notify.error(err)
    }
}


 


    return (
        <div className="AddProduct Box">
            <form onSubmit={handleSubmit(submit)}>

                <h2>Add Product</h2> 

              <label>Name:</label>
              <input type="text" {...register('name')}/>

              <label htmlFor="price">Price:</label>
              <input type="number" step='0.01' {...register('price')}/>

              <label>Stock</label>
              <input type="number" {...register('stock')}/>

              <button>Add</button>


            </form>	

            <NavLink to="/products">Go Back</NavLink>
            <br/>
            <button onClick={() =>navigate(-1)}>Go Back</button>
        </div>
    );
}

export default AddProduct;
