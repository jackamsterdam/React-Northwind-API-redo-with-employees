import "./Layout.css";
import { Box } from "@material-ui/core";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Home from "../../HomeArea/Home/Home";


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
                <Home/>
            </main>
            {/* <footer  style={{border: "5px solid black"}}> same like .Layout > * */}
            <footer>
              <Footer/>
            </footer>

        </div>


    );
}

export default Layout;
