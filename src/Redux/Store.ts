
import { productsReducer } from "./ProductsState"
import {combineReducers, createStore} from 'redux'



const reducers = combineReducers({
    productsState: productsReducer,
})

const store = createStore(reducers)

export default store