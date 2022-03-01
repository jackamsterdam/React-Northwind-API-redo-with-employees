import { Box, Typography } from "@material-ui/core";

function Specials(): JSX.Element {
    return (
        <div className="Specials Box">
            {/* instead of wrapping with p we wrap with p body1 default  */}
		   <Typography>
               Our Specials:
               <br/>

               {isWeekend() ? <Box component="span">Pizza</Box>: <Box component="span">Pasta</Box>}
               <br/>
               {isWeekend() ? <span>Pizza</span>: <span>Pasta</span>}
{/* body1 default  */}
               {isWeekend() ? <Typography>Pizza</Typography>: <Typography>Pasta</Typography>}
           </Typography>

        </div>
    );
}

function isWeekend(): boolean {
  const now = new Date()
  const dayOfWeek = now.getDay() + 1
  return dayOfWeek >= 6
}

export default Specials;
