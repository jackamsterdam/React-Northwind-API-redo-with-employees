import { Typography } from "@material-ui/core";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        //display flex is on the footer so all items inside will be flex items like the p element
        <div className="Footer">
			<Typography>All Rights Reserved to Jack Redo &copy;</Typography>
			{/* <p>All Rights Reserved to Jack Redo &copy;</p> */}
        </div>
    );
}

export default Footer;
