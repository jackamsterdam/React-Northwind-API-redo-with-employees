import { Button, ButtonGroup, Checkbox, createTheme, FormControlLabel, TextField, ThemeProvider, Typography } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import { Clear, ContactMail, Send } from "@material-ui/icons";
import "./ContactUs.css";

function ContactUs(): JSX.Element {

  const myTheme = createTheme({
      typography: {
          fontFamily: 'Helvetica',
          fontSize: 15,
          h3: {fontSize: 30}
      },
      palette: {
          primary: {main: green[600]},
          secondary: {main: orange[600]}
      }
  })





    return (
        <ThemeProvider theme={myTheme}>
        <div className="ContactUs Box">
            <Typography variant='h3' className="Headline">
                <ContactMail/> &nbsp;&nbsp;&nbsp;
                Contact Us
            </Typography>
            <TextField label="Name" variant="outlined" className="TextBox" />
            <TextField label="Email" type="email" variant="outlined" className="TextBox" />

            <FormControlLabel label="Send me promotional emails" control={<Checkbox />} />

            <ButtonGroup variant="contained" fullWidth>
                <Button color="primary" startIcon={<Send/>}>Send</Button>
                <Button color="secondary" startIcon={<Clear/>}>Clear</Button>
            </ButtonGroup>
			
        </div>
        </ThemeProvider>
    );
}

export default ContactUs;
