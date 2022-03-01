import { Button, Typography } from "@material-ui/core";
import { SyntheticEvent } from "react";
import { Send } from "@material-ui/icons";

function Recommendations(): JSX.Element {
    const item1 = "Irish Coffee"
    const item2 = "Blueberries"

    function recommend1(): void {
        console.log('item1', item1)
        
    }

    function recommend2(e: SyntheticEvent): void {
        console.log('event:', e.nativeEvent)  //event
        console.log('e', e)  //SyntheticBaseevent
        console.log('e.target', e.target);  //<button>Recommend 2</button>
        // console.log('e.target.value', e.target.value);
        
    }

    function recommend3(item: string): void {
        console.log('item', item)
    }


    function recommend4(item: string,item2: string, e: SyntheticEvent): void {
        console.log('item', item)  //Pancake
        console.log('item2', item2)  //Syrup
        console.log('e', e)  //SyntheticBaseevent
        console.log('e.target', e.target);  //<button>Recommend 2</button>
    }


    return (
        <div className="Recommendations Box">
            <Typography>
                <Button color='primary' variant="contained" fullWidth startIcon={<Send/>} onClick={recommend1}>Recommend 1</Button>
                <Button color='secondary' variant="contained" startIcon={<Send/>} onClick={recommend2}>Recommend 2</Button>
                <Button color="secondary" variant="outlined" endIcon={<Send/>} fullWidth onClick={() => {recommend3('Chocolate')}}>Recommend 3</Button>
                <Button color="primary" variant="contained" endIcon={<Send/>} onClick={(e) => {recommend4('Pancake', 'Syrup', e)}}>&nbsp;&nbsp;&nbsp;Recommend 4</Button>




                {/* <button onClick={recommend1}>Recommend 1</button>
                <button onClick={recommend2}>Recommend 2</button>
                <button onClick={() => {recommend3('Chocolate')}}>Recommend 3</button>
                <button onClick={(e) => {recommend4('Pancake', 'Syrup', e)}}>Recommend 4</button> */}
            </Typography>
			
        </div>
    );
}

export default Recommendations;
