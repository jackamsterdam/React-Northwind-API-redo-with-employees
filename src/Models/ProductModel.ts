class ProductModel {   //DATABASE MYSQL:   (node js is same like here)
    id: number = 0     //ProductId AS id
    name: string = ''   //ProductName AS name
    price: number =0  //UnitPrice AS price
    stock: number = 0  //UnitsInStock AS stock
    imageName: string = '' //CONCAT(ProductId, '.jpg') AS imageName
}

export default ProductModel