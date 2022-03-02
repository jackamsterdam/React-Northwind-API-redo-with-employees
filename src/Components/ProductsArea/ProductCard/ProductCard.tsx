import "./ProductCard.css";
import ProductModel from '../../../Models/ProductModel'
import config from "../../../Utils/Config";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
    product: ProductModel
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
            <div>

                {props.product.name}
                <br />
                Price: {props.product.price}
                <br />
                Stock: {props.product.stock}
            </div>
            <div>
                 {/* //in this case we are using Nodes router.get to get the image and also in ProductDetails we using node route to get the image */}
                <NavLink to={'/products/details/' + props.product.id}>
                    <img src={config.productsImageUrl + props.product.imageName} />
                </NavLink>
            </div>
        </div>
    );
}

export default ProductCard;
