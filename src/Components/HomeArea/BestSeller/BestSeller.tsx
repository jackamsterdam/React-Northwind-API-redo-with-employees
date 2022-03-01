import { Button, Typography } from "@material-ui/core";
import { useState } from "react";

function BestSeller(): JSX.Element {

    const [name, setName] = useState('')
    const [totalItems, setTotalItems] = useState(0)
    const [bestProduct, setBestProduct] = useState('')
    let unaffected = 'This wont get updated outside state'

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

    function show():void {
        // setName('Exotic Liquids')
        // setTotalItems(70)

        setName(prev => prev + 'gets added ')
        setTotalItems(prev => prev + 16)
    }

    function showMore():void {
        // setBestProduct('chairs')
        setBestProduct(prev => prev + ' iphone 13')
        unaffected = 'Didnt Change'
        console.log('unaffected', unaffected)
    }

    const updateColor = () => {
        // setCar(prevState => {...prevState, color: 'blue'})
        setCar(prevState => {
            return {...prevState, color: 'blue'}
        })
//         Because we need the current value of state, we pass a function into our setCar function.  This function receives the previous value.

// We then return an object, spreading the previousState and overwriting only the color.
    }

 

    return (
        <div className="BestSeller Box">
            <Button color="primary"variant="contained" fullWidth  onClick={show}>Best Seller</Button>
            <Typography variant="overline">Name: {name} | </Typography>
            <Typography variant="caption">Total Items: {totalItems} </Typography>

            <Button color="secondary" variant="outlined" fullWidth onClick={showMore}> Best Seller More</Button>
            <Typography variant="caption">Best Seller Product Number 2:{bestProduct} {unaffected}</Typography>

            <Typography variant="h5">My {car.brand}</Typography>
            <Typography>
                It is a {car.color} {car.model} from {car.year}.
            </Typography>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={updateColor}
            >Change to Blue</Button>
			
        </div>


        // <div className="BestSeller Box">
        //     <button onClick={show}>Best Seller</button>
        //     <span>Name: {name} | </span>
        //     <span>Total Items: {totalItems} </span>

        //     <button onClick={showMore}> Best Seller More</button>
        //     <span>Best Seller Product Number 2:{bestProduct} {unaffected}</span>

        //     <h1>My {car.brand}</h1>
        //     <p>
        //         It is a {car.color} {car.model} from {car.year}.
        //     </p>
        //     <button
        //       type="button"
        //       onClick={updateColor}
        //     >Change to Blue</button>
			
        // </div>
    );
}

export default BestSeller;


//good opportunity to memo it cause if only one needs to rerender no point on rerendering both 