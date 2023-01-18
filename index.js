class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct(title,description,price,thumbnail,code,stock){
        const newProd = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: this.products.length + 1
        }
        const codeValidator = this.products.every(prod => prod.code !== newProd.code)
        const prodValidator = Object.values(newProd).every(prop => prop !== null )
        return codeValidator == true && prodValidator == true ? this.products.push(newProd) : "Campos incompletos o repetidos"    
    }

    getProductById( id ){
        const product = this.products.find( prod => prod.id === id)
        
        return product === undefined ? "Not found" : product
    }

    getProducts(){
        return this.products
    }
}

const createProd = new ProductManager();

createProd.addProduct("Mochila","Mochila marca Elf", 4000,"mochila.jpg","m1",12);
createProd.addProduct("Calculadora","Calculadora Casio", 2000,"casio.jpg","c3",20);

console.log(createProd.getProductById(1));
console.log(createProd.getProducts());

