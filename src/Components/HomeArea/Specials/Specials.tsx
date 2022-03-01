import { Box } from "@material-ui/core";

function Specials(): JSX.Element {
    return (
        <div className="Specials Box">
		   <p>
               Our Specials:
               <br/>

               {isWeekend() ? <Box component="span">Pizza</Box>: <Box component="span">Pasta</Box>}
               <br/>
               {isWeekend() ? <span>Pizza</span>: <span>Pasta</span>}
           </p>

        </div>
    );
}

function isWeekend(): boolean {
  const now = new Date()
  const dayOfWeek = now.getDay() + 1
  return dayOfWeek >= 6
}

export default Specials;
