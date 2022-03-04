
import { productsReducer} from "./ProductsState"
import {combineReducers, createStore} from 'redux'
import {authReducer} from './AuthState'

import {composeWithDevTools} from 'redux-devtools-extension'



const reducers = combineReducers({
    productsState: productsReducer,
    authState: authReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store