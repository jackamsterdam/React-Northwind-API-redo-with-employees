import { Typography } from "@material-ui/core";

//Creating a data type 
interface SalesProps {
	percent: number 
    category: string
}

function Sales(props: SalesProps): JSX.Element {
    return (
        <div className="Sales Box">
            <Typography>
                Sale: {props.percent}% discount on all {props.category}
            </Typography>
        </div>
    );
}

export default Sales;
