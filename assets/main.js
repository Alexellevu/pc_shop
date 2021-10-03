/* programmazione ad oggetti */

/* Milestone 1
-creare un negozio online che mostri i prodotti ai personal pc.
-ciascun prodotto deve avere:
-nome
-descrizione
-prezzo
-immagine
-categoria
 */

/* classe per il prodotto con costruttore */
class Product{ /* scrivi /**  */
    /**
     * 
     * @param {string} name - nome del prodotto 
     * @param {string} description - descrizione del prodotto 
     * @param {number} price - prezzo del prodotto 
     * @param {string} image_path - immagine del prodotto
     * @param {string} category - categoria del prodotto 
     *
     */
    constructor(name, description, price, image_path, category){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_path = image_path;
        this.category = category;
      
    }

}

/* metodo per il like sul prodotto */

function addLike(){
    return this.like += 1;
}


const products = [
    new Product ('monitor full hd', 'hight definition screen', '149.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor hd', 'hight definition screen', '100.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor full hd', 'hight definition screen', '139.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor 4k', '4k screen', '200.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor full hd', 'hight definition screen', '135.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor hd', 'hight definition screen', '140.00','./assets/img/monitor.jpg', 'pc monitor')
];

/* console.log(products); */


/* products.forEach(product => {
    console.log(product);
    const {name, description, price, image_path, category}= product;/* destrutturazione oggetto */
/*     const markup = `
        <div class="product">
            <img src="${image_path}" alt="case">
            <h4>${name}</h4>
            <p>${description}</p>
            <hr>
            <span>${price}</span>
            <span>${category}</span>
            <button>Buy now</button>
        </div>
    ` */

/*     document.getElementById('products').insertAdjacentHTML('beforeend', markup)
});  */


/* crea una funzione per stampare i prodotti */
function printProduct(list, DomEl){
    list.forEach(product => {
        console.log(product);
        const {name, description, price, image_path, category}  = product;/* destrutturazione oggetto */
        const markup = `
            <div class="product">
                <img src="${image_path}" alt="case">
                <h4>${name}</h4>
                <p>${description}</p>
                <hr>
                <span>${price}</span>
                <span>${category}</span>
                <button>Buy now</button>
            </div>
        `

         DomEl.insertAdjacentHTML('beforeend', markup);
    })
}

printProduct(products, document.getElementById('products'));