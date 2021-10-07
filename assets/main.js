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
    new Product ('monitor full hd', 'hight definition screen', '149.50','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor hd', 'hight definition screen', '100.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor full hd', 'hight definition screen', '139.30','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor 4k', '4k screen', '200.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor full hd', 'hight definition screen', '135.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor hd', 'hight definition screen', '140.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor full hd', 'hight definition screen', '139.30','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor 4k', '4k screen', '200.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor full hd', 'hight definition screen', '135.00','./assets/img/monitor.jpg', 'pc monitor'),
    new Product ('monitor hd', 'hight definition screen', '140.00','./assets/img/monitor.jpg', 'pc monitor')
];

/* console.log(products); */


/* crea una funzione per stampare i prodotti */
function printProduct(list, DomEl){
    list.forEach(product => {
        /* console.log(product); */
        const {name, description, price, image_path, category}  = product;/* destrutturazione oggetto */
        const markup = `
            <div class="product">
                 <a href="./product.html"> <img class="img-fluid" src="${image_path}" alt="case"></a>
               
                <h4>${name}</h4>
                <p>${description}</p>
                <hr>
                <span>€ ${price}</span>
                <p>category: ${category}</p>
                
                <button class="buy_now btn btn-dark" data-product-name="${name}" data-product-price="${price}">Buy now</button>

              
            </div>
        `
        /*a riga 69 aggiungo dei data al button per identificare il prodotto al click */
         DomEl.insertAdjacentHTML('beforeend', markup);
    })
}

const productsEl= document.getElementById('products');
printProduct(products, productsEl);

/* milestone pagina singolo prodotto */



/* Milestone implementazione carrello */

    let cart = [];
    let total_cart = 0;

/* ciclo all' interno dei bottoni , al clik salvo il data corrispondete al bottone*/
    document.querySelectorAll('.buy_now').forEach(button => {
    button.addEventListener('click', function(){
        /* console.log(this); */
       /*  console.log(this.getAttribute('data-product-price')); */
       const name = this.getAttribute('data-product-name');
       const price =this.getAttribute('data-product-price') ;
       /* console.log(price );*/
       const products_select = {name, price};
     /* console.log(products_select);  */
       cart.push(products_select);
        console.log(cart);
      
        total_cart +=parseFloat(products_select.price);  
       

       document.querySelector('.cart_view').insertAdjacentHTML('beforeend',`<div>${name} ${price}<i id="cancel" value="1" class="fas fa-trash-alt p-2"></i></div>` );

       document.getElementById('total').innerHTML ='totale: ' + total_cart.toFixed(2)  ;
        

    
              
        
     

       
    
    })
  
    
});


                
                

  