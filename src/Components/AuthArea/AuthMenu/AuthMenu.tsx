import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {


const [user, setUser] = useState<UserModel>(null)

useEffect(() => {

    setUser(store.getState().authState.user)
  //Subscribe so store changes whenever authstate chane report it to me
        // the moment ther is a change in the store let me know doesnt matter what componnet  changes the store it will automatically call this subscribe 
        // btw subscribe doesnt happen once like useeffect subscribe happens every time the state changes 
        // subscribe listens to redux 

    const unsubscribeMe = store.subscribe(() => {
        setUser(store.getState().authState.user)    
    })
   return () => unsubscribeMe()

},[])
// האזנה זולל משעבים זולל פרפורמס לא זולל זכרון 
// lol so basically i would do  setuser  after you press the login BUTTON in the form ! but the login button is in the Login component .....mazal that i have a global state.. so when user logins i want to lirander this compnent again by doing setUser in the component ....but the click is in a different component in login component  ideally that when i hit login over therei would have a function that would call setUser again to it can lirender again but i dont cause its a diffent component  so i have subscribe...i can subxscribe to changes in the staste..anywhere in the staste and according to that i will lirender this componenent again casue i called setstate in the subscribe so any changes in state will cause this setuser to be acitvated.. so now goood this ui will go again.  but usually old cases i would have a button in same compnent  and that would call setstae again and the rindoor will happen again 

   {/* so first time when not logged in useeffect is called goes to get state and its ull so user is null so this happens first ..... but when we login ...cause we are subscribed with setuser then setuser gets new state and now user is not null so set user mirander again and the second part getsh shown! but without subscribe we wouldnt know that in the login component something changed lol. nobody gonna call setuser again.. useeffect happens once. lol so subscibe happens more than once so itt will call it. */}

   
			{/* conditional rendering  */}

    return (
        <div className="AuthMenu">
                {user === null ?
                <>
                 <span>Hello Guest</span>
                 <span> | </span>
                 <NavLink to="/register">Register</NavLink>
                 <span> | </span>
                 <NavLink to="/login">Login</NavLink>
                 </>
                 :
               <>
                

                 
                 <span>Hello {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} {user.lastName}</span>
                 <span> | </span>
             
                <NavLink to="/logout">Logout</NavLink>
                </>
                }

		
        </div>
    );
}

export default AuthMenu;
