import { Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";

function Clock(): JSX.Element {

	const [time, setTime] = useState('')

    useEffect(() => { 
        const timerId = setInterval(() => {
            console.log(Math.random())
            const now = new Date()
            setTime(now.toLocaleString())

        }, 1_000)
        return () => clearInterval(timerId)  //componentwillunmount
    }, []) //optional componentdidupdate


      //Component Did Mount - happens once becasue of []  and this is setInterval not setTimeout
    //   useEffect(() => { 
    //     const timerId = setInterval(() => {
            
    //         setTime(prev => prev + 1)

    //     }, 3_000)
    //     return () => clearInterval(timerId)
    // }, [])

    return (
        <div className="Clock Box">
            {/* <p><span>{time}</span></p> */}
         {/* variant body1 is default so no need to write it  */}
            <Typography variant="body1"><Typography variant="caption">{time}</Typography></Typography>

        </div>
    );
}

export default Clock;
//! More info 
// import { Typography, Button } from "@material-ui/core";
// import { useEffect, useState } from "react";

//                 // w3
// function Timer() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {

//         let timer = setTimeout(() => {
//             console.log(Math.random())  //to show that it will run multipple times if you forget [] in useeffect
//             setCount(count => count + 1)
//         }, 1000)

//         return () => clearTimeout(timer)
//     }, []) //dont forget [] so only runs once without it will run again and again cause will reerender again and again 

//     return (
//         <h1>I have rendered {count} times!</h1>
//     )
// }
// export default Timer;