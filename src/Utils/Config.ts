//development and Prdoction configurations
class Config {

}

class DevelopmentConfig extends Config {
   productsUrl = 'http://localhost:3030/api/products/'
   productsImageUrl = 'http://localhost:3030/api/products/images/'
   registerUrl = 'http://localhost:3030/api/auth/register/'
   loginUrl = 'http://localhost:3030/api/auth/login/'
}

class ProductionConfig extends Config {
    productsUrl = 'http://www.northwind.com/api/products/'
    productsImageUrl = 'http://www.northwind.com/api/products/images/'
    registerUrl = 'http://www.northwind.com/api/auth/register'
    loginUrl = 'http://www.northwind.com/api/auth/login'
}

//do not write = but write === dont forget BOOLEAN HERE CHeck
const config = process.env.NODE_ENV === 'production' ?  new ProductionConfig() : new DevelopmentConfig()


export default config