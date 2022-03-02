import { Typography } from "@material-ui/core";
import ContactUs from '../ContactUs/ContactUs'

function About(): JSX.Element {
    return (
        <div className="About">
			<Typography>About us</Typography>
            <ContactUs />
        </div>
    );
}

export default About;
