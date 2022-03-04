import { NavLink } from "react-router-dom";
import "./Menu.css";
//So here we make the behavior to be a SPA instead of a href links navigating to differnt pages 
// make sure to spell it NavLink and not Navlink 
function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/employees">Employees</NavLink>

			{/* <a href="/home">Home</a>
			<a href="/products">Products</a>
			<a href="/about">About</a> */}
        </div>
    );
} 		

export default Menu;

