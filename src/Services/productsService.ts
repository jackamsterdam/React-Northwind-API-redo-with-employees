import axios from 'axios'
import ProductModel from '../Model/ProductModel'
import config from '../Utils/Config'

class ProductsService {
 

//you forgot ProductModel[] collection []   and dont put word function! becase you are in a class
     async getAllProducts():Promise<ProductModel[]> {
        //  await axios.get<ProductModel[]>('http://localhost:3001/api/products')
         const response = await axios.get<ProductModel[]>(config.productsUrl)
         const products = response.data 

         return products
     }

     async getOneProduct(id: number):Promise<ProductModel> {
          const response = await axios.get<ProductModel>(config.productsUrl + id)
          const product = response.data
          return product
     }








}

//here we need one instance but with Node js we created a bunch of instances from the class with request.body copy contructor so we exported the class
const productsService = new ProductsService()

export default productsService

//!do we need word function ?? do we need ot export the xlass? or the instance asnwer is above