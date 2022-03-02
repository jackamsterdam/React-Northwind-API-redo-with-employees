import { useEffect, useState } from "react";
import ProductModel from "../../../Model/ProductModel";
import notify from "../../../Services/NotifyService";
import productsService from "../../../Services/productsService";
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../../SharedArea/Loading/Loading'

function ProductsList(): JSX.Element {
    // useState<S> is a generic behind the scences 
    const [products, SetProducts] = useState<ProductModel[]>([])



// without async: 
//     useEffect(() => {
//         productsService.getAllProducts()
//         .then(products => SetProduct(products))
//         .catch(err => notify.error(err))
//    }, []);


    //    side Effect 
    useEffect(() => {
        (async function () {
            try {
                const products = await productsService.getAllProducts()
                SetProducts(products)
            } catch (err:any) {
                notify.error(err)
            }
        })()
    }, [])




//It is ok  for this to be undefined on start cause its an empty array so you are looping over an empty array so wont display anything. but if you were to access a property of an object that doesnt exist thats KRISA so in porducts Details we are accesing an object that is not there on the start so we need to make sure taht there is a product first 
    return (

        <div className="ProductsList">

            <NavLink to="/products/new">➕</NavLink>

            {products.length === 0 && <Loading/>}
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
    );
}

export default ProductsList;
