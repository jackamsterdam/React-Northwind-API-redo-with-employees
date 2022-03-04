import UserModel from "../Models/UserModel"
import jwtDecode from 'jwt-decode'

export class AuthState {
    user: UserModel =  null
    token:string =  null

    constructor() {
         this.token = localStorage.getItem('token')
        //  token: 
        //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJqYWNrIiwibGFzdE5hbWUiOiJhbXN0ZXJkYW0iLCJ1c2VybmFtZSI6ImphY2sifSwiaWF0IjoxNjQ2NDA0NDI5LCJleHAiOjE2NDY0MjI0Mjl9.To3SmCgiwSIkcu0XxZXZOQbynSquUUg0IZ14Rp-Qiz8"

         if (this.token) {
            

             const encodedObject:any = jwtDecode(this.token)
             this.user = encodedObject.user
// user: 
            //  {
            //     "id": 4,
            //     "firstName": "jack",
            //     "lastName": "amsterdam",
            //     "username": "jack"
            //   }
         }
    }
}

export enum AuthActionType {
    Register = 'Register',
    Login = 'Login',
    Logout = 'Logout'
}

export interface AuthAction {
    type: AuthActionType 
    payload?: string
}

export  function registerAction(token: string):AuthAction {
    return {type: AuthActionType.Register, payload: token}
}

export function loginAction(token: string):AuthAction {
    return {type: AuthActionType.Login, payload: token}
}

export  function logoutAction():AuthAction {
    return {type: AuthActionType.Logout}
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = {...currentState}

    switch(action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload 
            const encodedObject: any  = jwtDecode(newState.token)
            newState.user = encodedObject.user
            localStorage.setItem('token', newState.token)
        break;
        case AuthActionType.Logout:
            newState.user = null 
            newState.token = null
            localStorage.removeItem('token')
    }

    // authState this gets crossed out in redux store when logout 
    // token"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJqYWNrIiwibGFzdE5hbWUiOiJhbXN0ZXJkYW0iLCJ1c2VybmFtZSI6ImphY2sifSwiaWF0IjoxNjQ2NDA0NDI5LCJleHAiOjE2NDY0MjI0Mjl9.To3SmCgiwSIkcu0XxZXZOQbynSquUUg0IZ14Rp-Qiz8"null
    // user{
    //   "id": 4,
    //   "firstName": "jack",
    //   "lastName": "amsterdam",
    //   "username": "jack"
    // }

    return newState
}