import "./Layout.css";
import { Box } from "@material-ui/core";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Home from "../../HomeArea/Home/Home";
import Routing from "../Routing/Routing";


function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header>
               <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                                 <Routing/>
            </main>
           
            <footer>
              <Footer/>
            </footer>

        </div>

);
}
{/* <footer  style={{border: "5px solid black"}}> same like .Layout > * */}

export default Layout;
