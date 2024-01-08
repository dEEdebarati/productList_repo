// let add = document.querySelector("#button");
// let listBook = document.querySelector("ol");

// add.addEventListener("click",addToList);

// function addToCart(productName,price){

//     let list = document.getElementById("cart-list");
//     let listItem = document.createElement("ol");
//     listItem.innerHTML = `
//     <td>${productName}</td>
//     <td>${price}</td>
//     <td>x</td>`
let cart = {};

    function addToCart(productId, price) {
        if (!cart[productId]) {
            cart[productId] = {
                price: price
            };
            updateCart();
        }
    }

    function removeFromCart(productId) {
        if (cart[productId]) {
            delete cart[productId];
            updateCart();
        }
        // while(cart.firstChild){
        //     cart.removeChild(cart.firstChild);
        // }
        // let cartElement = document.getElementById("cart-items");
        // let row = document.querySelector("product-id");
        // if(row && row.hasAttribute("product-id")){
        //     let e = productId.target.parentElement;
        //     e.remove();
        // }
        
        
    }
   

    function updateCart() {
        let cartItemsElement = document.getElementById("cart-items");
        cartItemsElement.innerHTML = "";

        Object.keys(cart).forEach(productId => {
        const product = cart[productId];
        const cartItemRow = document.createElement("tr");
        cartItemRow.innerHTML = `<td>${productId}</td>
                                  <td>${product.price}Tk</td>
                                  <td><button onclick="removeFromCart('${productId}')">Remove</button></td>`;
        cartItemsElement.appendChild(cartItemRow);
    });
}