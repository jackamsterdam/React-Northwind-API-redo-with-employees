import { Button, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Model/ProductModel";
import notify from "../../../Services/NotifyService";
import productsService from "../../../Services/productsService";
import config from "../../../Utils/Config";
import Loading from "../../SharedArea/Loading/Loading";

function ProductDetails(): JSX.Element {

    const params = useParams()
    const id = Number(params.id)
    console.log('params', params)
    console.log('params.id', params.id) //number not string
    console.log('id',id) 

    const navigate = useNavigate()

    //Create state for the product to display
    const [product, setProduct] = useState<ProductModel>()
    console.log(product)

    useEffect(() => {
        (async function () {
            try {

                const product = await productsService.getOneProduct(id)
                setProduct(product)


            } catch (err: any) {
                notify.error(err)
            }
        })()
    }, [])

//It is not OK for this to be undefined on start cause you cant access undefined.property that is KRISA -crash so we need to first check if we have the product object {} and onnly then we can acces it properties  

    return (
        <div className="ProductDetails">

{/* on start product is undefined so !undefined which is true so display Loading gif */}

         {product && 
            <>
            <Typography variant="h4">Product Details</Typography>

            {!product && <Loading/>}

            <Typography variant="h5">Name: {product.name}</Typography>
            <Typography variant="h5">Price: {product.price}</Typography>
            <Typography variant="h5">Stock: {product.stock}</Typography>
            
            
            {/* //in this case we are using Nodes router.get to get the image and also in ProductCard we using node route  */}
            <img src={config.productsImageUrl + product.imageName}/>
            <br/>
            <br/>

             <NavLink to='/products'>Go Back</NavLink>
             <br/>
             <br/>
             <Button onClick={() => navigate(-1)} color="primary" variant="contained" startIcon={<Send/>}>Go Back</Button>
           
            </>
 
         }
        </div>
    );
}

export default ProductDetails;
