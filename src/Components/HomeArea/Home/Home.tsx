
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommendations from "../Recommendations/Recommendations";
import Specials from "../Specials/Specials";
import Sales from "../Sales/Sales";
import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Hours from "../Hours/Hours";
import RandomColor from "../RandomColor/RandomColor";
import Suggestions from "../Suggestions/Suggestions";

function Home(): JSX.Element {
    return (
        <div className="Home">
            {/* Interpolation  */}
			<Discount/>
            {/* Conditional Rendering  */}
            <Specials/>
             {/* Displaying Lists  */}
             <Desserts/>
             {/* Events  */}
             <Recommendations/>
             {/* Props  */}
             <Sales percent={10} category="Beverages" />
             <Sales percent={15} category="Fruits" />
             {/* State  */}
             <BestSeller/> 
             {/* Side Effects  */}
             <Clock/>
 {/* CSS Modules  */}
             <Hours />

             {/* Class Components  */}
             <Suggestions header="Cool Suggestions"/>
             <RandomColor/>

        </div>
    );
}

export default Home;
