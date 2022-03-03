import axios from 'axios'
import ProductModel from '../Models/ProductModel'
import config from '../Utils/Config'
import store from '../Redux/Store'
import { addProductAction, deleteProductAction, fetchProductsAction, updateProductAction } from '../Redux/ProductsState'

class ProductsService {
 

//you forgot ProductModel[] collection []   and dont put word function! becase you are in a class
     async getAllProducts():Promise<ProductModel[]> {
          if (store.getState().productsState.products.length === 0){
        //  await axios.get<ProductModel[]>('http://localhost:3001/api/products')
         const response = await axios.get<ProductModel[]>(config.productsUrl)
         const products = response.data 

         store.dispatch(fetchProductsAction(products))
          }

     //     return products
     return store.getState().productsState.products
     }

     async getOneProduct(id: number):Promise<ProductModel> {
// so either get product from store or get product from axios 
          let product = store.getState().productsState.products.find(p => p.id === id)
          if (!product) {
               const response = await axios.get<ProductModel>(config.productsUrl + id)
               product = response.data
          }
          
          return product
     }

     async addNewProduct(product: ProductModel):Promise<ProductModel> {
         // Convert our product to FormData:
          const formData = new FormData()

          formData.append("name", product.name)
          formData.append("price", product.price.toString())
          formData.append("stock", product.stock.toString())
          formData.append("image", product.image.item(0))
          console.log('product.name', product.name)
          console.log("product.image.item(0)", product.image.item(0));
          // File {name: '7.jpg', lastModified: 1645730158175, lastModifiedDate: Thu Feb 24 2022 21:15:58 GMT+0200 (Israel Standard Time), webkitRelativePath: '', size: 15606, …}
          console.log("product.image", product.image);  //FileList {0: File, length: 1}


          const response = await axios.post<ProductModel>(config.productsUrl, formData)
          const addedProduct = response.data
          store.dispatch(addProductAction(addedProduct))
          return addedProduct

     }

     async updateProduct(product: ProductModel):Promise<ProductModel> {
          const formData = new FormData()
          formData.append('name', product.name)
          formData.append('price', product.price.toString())
          formData.append('stock', product.stock.toString())
          formData.append('image', product.image.item(0))
                                                                     //dont forget to send formDAta ofcourse 
          const response = await axios.put<ProductModel>(config.productsUrl + product.id, formData)
          const updatedProduct = response.data
          store.dispatch(updateProductAction(updatedProduct))
          return updatedProduct

          // in node: 
          // router.put('/products/:id', async (request: Request, response: Response, next: NextFunction) => {
          //      try {
          //          const id = +request.params.id
          //          request.body.id = id  //even if it had in body i dont care i put it in the body 
          //          //  ברגע שאתה מוסיף לו מעפפיין שאין לו אז גקטסרפט יוצרת 
          //          const product = new ProductModel(request.body)
     }

     async deleteOneProduct(id: number):Promise<void> {
   
          await axios.delete(config.productsUrl + id)
          store.dispatch(deleteProductAction(id))
     }








}

//here we need one instance but with Node js we created a bunch of instances from the class with request.body copy contructor so we exported the class
const productsService = new ProductsService()

export default productsService

//!do we need word function ?? do we need ot export the xlass? or the instance asnwer is above