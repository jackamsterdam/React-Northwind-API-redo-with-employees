//development and Prdoction configurations
class Config {

}

class DevelopmentConfig extends Config {

    productsUrl = 'http://localhost:3030/api/products/'
    productsImageUrl = 'http://localhost:3030/api/products/images/'
    registerUrl = 'http://localhost:3030/api/auth/register/'
    loginUrl = 'http://localhost:3030/api/auth/login/'
    employeesUrl = 'http://localhost:3030/api/employees/'
    employeesImageUrl = 'http://localhost:3030/api/employees/images/'
    
//    productsUrl = 'http://localhost:3001/api/products/'
//    productsImageUrl = 'http://localhost:3001/api/products/images/'
//    registerUrl = 'http://localhost:3001/api/auth/register/'
//    loginUrl = 'http://localhost:3001/api/auth/login/'
    //   employeesUrl = 'http://localhost:3001/api/employees/'
    //   employeesImageUrl = 'http://localhost:3001/api/employees/images/'
}

class ProductionConfig extends Config {
    productsUrl = 'http://www.northwind.com/api/products/'
    productsImageUrl = 'http://www.northwind.com/api/products/images/'
    registerUrl = 'http://www.northwind.com/api/auth/register'
    loginUrl = 'http://www.northwind.com/api/auth/login'
    employeesUrl = 'http://www.northwind.com/employees/'
    employeesImageUrl = 'http://www.northwind.com/employees/images'
}

//do not write = but write === dont forget BOOLEAN HERE CHeck
const config = process.env.NODE_ENV === 'production' ?  new ProductionConfig() : new DevelopmentConfig()


export default config