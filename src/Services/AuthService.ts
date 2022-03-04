import UserModel from "../Models/UserModel"
import axios from 'axios'
import config from '../Utils/Config'
import { loginAction, logoutAction, registerAction } from "../Redux/AuthState"
import store from "../Redux/Store"
import CredentialsModel from "../Models/CredentialsModel"

class AuthService {


    async register(user: UserModel):Promise<void> {
           const response = await axios.post<string>(config.registerUrl, user)
           const token = response.data
           store.dispatch(registerAction(token))  //once you give it it will update state and all subscriptions will activate.  //why do we need to subscribe in Authmenu can we just return the user?
          //no need to return token he has nothing to do with it it jsut goes to store so axios interceptor can use it 
    }

    async login(credentials: CredentialsModel):Promise<void> {
        const response = await axios.post<string>(config.loginUrl, credentials)
        const token = response.data
        store.dispatch(loginAction(token))
    }

    logout():void {
        store.dispatch(logoutAction())
    }
}










const authService = new AuthService()
export default authService