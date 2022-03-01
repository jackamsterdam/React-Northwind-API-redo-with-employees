import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<a href="/home">Home</a>
			<a href="/products">Products</a>
			<a href="/about">About</a>
        </div>
    );
}

export default Menu;
