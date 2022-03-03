import ProductModel from '../Models/ProductModel'


export class ProductsState {
    //! this.products = localStorage.getItem('products')
    // if (this.products) {
    //     products: ProductModel[] = [JSON.parse(products)]
    // }
    products: ProductModel[] = []
}


export enum ProductsActionType  {
    FetchProducts = 'FetchProducts',
    AddProduct = 'AddProduct',
    UpdateProduct = 'UpdateProduct',
    DeleteProduct = 'DeleteProduct'
}

export interface ProductsAction { 
    //i think its the object tavnit returned from the below funcitons thats why :ProductAction cause that is what it returns ...you give the below functions a products or product and returns to you a ProductsAction with a type and payload מתאים  and then store.dispatch(state (behind the scenes), productsAction - {type:for case, paylaod: the products })
    // so dispatch({type: , payload}) to change state בעקבות an action and that goes to reducer
    // otherwise everywhere in the code  we would have to write dispatch(whichcase, products) instead of passing just the products and store.dispatch will actually get store.dispatch({type, payload}) even though we passed it just the payload... thats why we have all these action creators

    // then you can getstate with new objects and update the view the dispaly 

    type: ProductsActionType,
    payload: any 
}


//these 4 just make the action object for you of type ProductsAction      they just return a productsAction
export function fetchProductsAction(products: ProductModel[]):ProductsAction {  //ProductsAction is the **TYPE** of object returned
    return {type:ProductsActionType.FetchProducts, payload: products }  //this part which is returned is just based on the interface above 
  
}

export function addProductAction(product: ProductModel): ProductsAction {
    return {type: ProductsActionType.AddProduct, payload: product}
}

export function updateProductAction(product: ProductModel):ProductsAction { //returns ProductsAction for store.dispatch to use
   return {type: ProductsActionType.UpdateProduct, payload: product} //with id
}

export function deleteProductAction(id: number): ProductsAction {  //yeaah dispatch needs to get a type {} also from delete
   return {type: ProductsActionType.DeleteProduct, payload: id}
}



// store.dispatch(getStatte(), , actioncreateor()) 
// we need to do action on state but  the state is a class not an object  so we need to create an object from that class

//action: ProductsAction object {type:..., payload:...}
// = dont forget not :  cause its default value
// dont forget break !!  even write them first the tavnit
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState  = {...currentState}
  console.log('newState', newState)   //! newStaste {products: [{},{},{},{}]}   
                                                            //   0, 1 , 2 ,3   //newState is an object but products is an array!
    switch(action.type) {
        case ProductsActionType.FetchProducts:
            newState.products = action.payload  //  products = [{},{}]

            //! localStorage.setItem('products', JSON.stringify(newState.products))
            break;






        case ProductsActionType.AddProduct:  //question the second time we add product - doesnt new ProductState() is empty at first and doesnt have everything fetched?? cause its a class? so we pushing to empty array???? cause everytime it startsss from 0 it says new ProductsSTate() above how can a class hold the previous values??? like where is dispatch taking the old state from???? yes above we initizlied it to currentState default to new ProductsState() yes that is first time but second time i guess it doesnt use the new ProductState() it doesnt use that default value but takes the currentState with products in it already  but where does dispatch find that instance we previously made in order to use if to add a product to it??? 
        // WHERE is this instance hiding ?? 
            newState.products.push(action.payload)  //[].push({})
            break;
        case ProductsActionType.UpdateProduct: //newState.products is the [] value! not the property
          const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id)
          if (indexToUpdate >= 0) {
          newState.products[indexToUpdate] = action.payload
          }
          break;

        case ProductsActionType.DeleteProduct:
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload)
            if (indexToDelete >= 0) {

                newState.products.splice(indexToDelete, 1)
            }
    }
    return newState
}