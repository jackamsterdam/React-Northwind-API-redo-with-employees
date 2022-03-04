import UserModel from "../Models/UserModel"
import jwtDecode from 'jwt-decode'

export class AuthState {
    user: UserModel =  null
    token:string =  null

    constructor() {
         this.token = localStorage.getItem('token')
         if (this.token) {
            

             const encodedObject:any = jwtDecode(this.token)
             this.user = encodedObject.user
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



    return newState
}