import { Typography } from "@material-ui/core";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo/>
			{/* <h1>Northwind Redo 2 After forgot By Jack</h1> */}
			<Typography variant="h3">Northwind Redo 2 After forgot By Jack</Typography>
        </div>
    );
}

export default Header;
