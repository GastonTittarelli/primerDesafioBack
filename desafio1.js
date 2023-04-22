class ProductManager {
    constructor() {
        this.products = [];
    }

    #generateId = () => {
        return this.products.length + 1;
    }

    getProducts = () => {
        return this.products;
    }

    getProductsById = (id) => {
        if (id <= this.products.length ) {
            let product = this.products.find(prod => prod.id === id)
            return product;
        }else{
            return console.log("Not found");
        } 
    }
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.#generateId();
        const codeExist = this.products.find(prod => prod.code === code)
        const product = {id, title, description, price, thumbnail, code, stock }

        if (!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Error, falta uno o mas datos");
        }
        if (codeExist){
            return console.log("Error, el codigo ya existe");
        }
        this.products.push(product)
        
    }
}

const manager = new ProductManager ()
manager.addProduct("Coca-Cola", "Sugar drink", "$3", "img", "AD3xt#1", 400 )
manager.addProduct("Sprite", "Sugar drink", "$3", "img", "AD3xt#2", 300)

//lista de productos
manager.getProducts()
console.log(manager.getProducts())

//buscador de producto por id (colocar numero dentro de los parentesis)
console.log(manager.getProductsById(1))