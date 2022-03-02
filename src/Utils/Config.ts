//development and Prdoction configurations
class Config {

}

class DevelopmentConfig extends Config {
   productsUrl = 'http://localhost:3030/api/products/'
   productsImageUrl = 'http://localhost:3030/api/products/images/'
}

class ProductionConfig extends Config {
    productsUrl = 'http://www.northwind.com/api/products/'
    productsImageUrl = 'http://www.northwind.com/api/products/images/'
}

//do not write = but write === dont forget BOOLEAN HERE CHeck
const config = process.env.NODE_ENV === 'production' ?  new ProductionConfig() : new DevelopmentConfig()


export default config