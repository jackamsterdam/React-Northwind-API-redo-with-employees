import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notify from "../../../Services/NotifyService";
import productsService from "../../../Services/productsService";
import "./AddProduct.css";

import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";

function AddProduct(): JSX.Element {

const {register, handleSubmit, formState} = useForm<ProductModel>()
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

                <Typography variant="h4">Add Product</Typography> 

         
              <TextField label="Name:" variant="outlined" className="TextBox" type="text" {...register('name', {
                  required: {value: true, message: 'Missing product name'}
              })}/>
              <Typography variant="caption">{formState.errors.name?.message}</Typography>

              <TextField label="Price:" variant="filled"  className="TextBox" type="number"  {...register('price',{
                  required: {value: true, message: 'Missing price'},
                  min: {value: 0, message: "Price can't be negative"},
                  max: {value: 1000, message: "Price can't exceed 1000"}
              })}/>
              <Typography variant="caption">{formState.errors.price?.message}</Typography>

              <TextField label="Stock:" variant="standard" className="TextBox" type="number" {...register('stock', {
                  required: {value: true, message: 'Missing stock'},
                  min: {value: 0, message: "Stock can't be negative"},
                  max: {value: 1000, message: "Stock can't exceed 1000"}
              })}/>
              <Typography variant="caption">{formState.errors.stock?.message}</Typography>
              
              {/* accept="image/*" */}
              <label>Image:</label>
              <input  className="TextBox" type="file" accept="image/*" {...register('image',{
                  required: {value: true, message: "Please provide a photo"}
              })} />
              <Typography variant="caption">{formState.errors.image?.message}</Typography>
              {/* startIcon={<Send/>} */}
              <Button fullWidth color="primary" variant="contained" >Add</Button>


            </form>	

            <NavLink to="/products">Go Back</NavLink>
            <br/>
            <br/>
            <Button color="primary" variant="contained" fullWidth onClick={() =>navigate(-1)}>Go Back</Button>
        </div>
    );
}

export default AddProduct;



// return (
//     <div className="AddProduct Box">
//         <form onSubmit={handleSubmit(submit)}>

//             <h2>Add Product</h2> 

//           <label>Name:</label>
//           <input type="text" {...register('name', {
//               required: {value: true, message: 'Missing product name'}
//           })}/>
//           <span>{formState.errors.name?.message}</span>

//           <label>Price:</label>
//           <input type="number" step='0.01' {...register('price',{
//               required: {value: true, message: 'Missing price'},
//               min: {value: 0, message: "Price can't be negative"},
//               max: {value: 1000, message: "Price can't exceed 1000"}
//           })}/>
//           <span>{formState.errors.price?.message}</span>

//           <label>Stock:</label>
//           <input type="number" {...register('stock', {
//               required: {value: true, message: 'Missing stock'},
//               min: {value: 0, message: "Stock can't be negative"},
//               max: {value: 1000, message: "Stock can't exceed 1000"}
//           })}/>
//           <span>{formState.errors.stock?.message}</span>

//           <label>Image:</label>
//           <input type="file" accept="image/*" {...register('image',{
//               required: {value: true, message: "Please provide a photo"}
//           })} />
//           <span>{formState.errors.image?.message}</span>

//           <button>Add</button>


//         </form>	

//         <NavLink to="/products">Go Back</NavLink>
//         <br/>
//         <button onClick={() =>navigate(-1)}>Go Back</button>
//     </div>
// );