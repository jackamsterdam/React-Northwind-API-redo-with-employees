import { Button, TextField, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notify from "../../../Services/NotifyService";
import productsService from "../../../Services/productsService";
import "./UpdateProduct.css";

function UpdateProduct(): JSX.Element {
    


   //בשביל לדעת איזה תיבה שייכת לאיזה פרופרטי REGISTER
   //בשביללקרא לפונקציה הזה ואני אביא לך מוצר מומגר לפה HANDLESUBMIT
   //שאני אומר לך מה הבעיות עם הטופס בשביל שתצציג שגיאות  FORMSTATE
   //אם אתה רוצה להגדיר ערכים ראשוניים SETVALUE
   //כמה פעמים אני רוצה לעשות את זה - פעם אחת 
   //אז איפה אני עושה את זה ב 
   //useEffect
   // we dont have the product name - we need to bring it from the store and its a side effect cause we leaving the borders of the component!! im asking to sharat to bring it i dont have it

    const params = useParams()
    console.log(params.id)
    const id = +params.id
    const navigate = useNavigate()

    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>()

    useEffect(() => {

        (async function () {
            try {
                const product = await productsService.getOneProduct(id)
                setValue('name', product.name)  //מה הוליו שאתה רוצה לשתול  באותה שדה של הניים?
                setValue('price', product.price)
                setValue('stock', product.stock)
                        //i dont do pic as well becasu the picture i dont have it - its at the backend

            } catch (err: any) {
                notify.error(err)
            }

        })()

    }, [])

    async function submit(product: ProductModel) {

      

        //  no need to async function wrap it cause the submit is wrapping already 
                try {
                    product.id = id  //!majorly important ther is no id entered in form by user but we have id of the product from the params so we need to add it this id will be send as part of the url in axios. (regardless of seding the id in form data cause REST Archeticture takes the id from url in node backend)
                    await productsService.updateProduct(product)
                    notify.success('Product updated')
                    navigate('/products')
                }
                catch (err: any) {
                    notify.error(err)
                }

       

    }





    return (
        <div className="UpdateProduct Box">
            <form onSubmit={handleSubmit(submit)}>
   {/* EDit כשאתה עורך את הדברים */}
                  {/* UPDATE  לעומת כשהגעת למסקנה שאתה רוצה לעדכן  */}

                <Typography variant="h4">Edit Product</Typography>

                <TextField  InputLabelProps={{
            shrink: true,
          }} type="text" label="name" className="TextBox" variant="outlined" {...register('name', {
                    required: { value: true, message: 'Missing product name' }
                })} />
                <Typography variant="caption">{formState.errors.name?.message}</Typography>

                <TextField  InputLabelProps={{
            shrink: true,
          }} type="number" label='price' className="TextBox" variant="filled" {...register('price',{
                    required: {value: true, message: "Missing  price"},
                    min: {value: 0, message: "Price can't be negative"},
                    max: {value: 1000, message: "Price can't exceed 1000"}
                })}/>
                <Typography variant="caption">{formState.errors.price?.message}</Typography>

                <TextField  InputLabelProps={{
            shrink: true,
          }} label="stock" type="number" className="TextBox" variant="outlined" {...register('stock', {
                    required: {value: true, message: 'Missing price'},
                    min: {value: 0, message: "Stock can't be negative"},
                    max: {value: 10000, message: "Stock can't exceed 1000"}

                })}  />
                <Typography variant="caption">{formState.errors.stock?.message}</Typography>

                <label>Image:</label>
                <input className="TextBox" type="file" accept="image/*" {...register('image', {
                    required: {value: true, message: "Missing photo"}
                })} />
                <Typography variant="caption">{formState.errors.image?.message}</Typography>
 {/* dont forget type submit  */}
                <Button type="submit" fullWidth color="primary" variant="contained">Update Product</Button>

            </form>

        </div>
    );
}

export default UpdateProduct;
