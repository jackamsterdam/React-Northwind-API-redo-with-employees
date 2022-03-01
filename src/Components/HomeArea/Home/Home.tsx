
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<Discount/>
            <Specials/>
        </div>
    );
}

export default Home;
