// ================= AM SPORTS SYSTEM =================


// CART STORAGE

let cart = JSON.parse(localStorage.getItem("AM_cart")) || [];




// PRODUCT QUANTITY

let quantity = 1;





// ================= ADD PRODUCT =================


function addProduct(name, price){


cart.push({

name:name,

price:Number(price)

});


saveCart();


alert(name + " added to cart 🛒");


}







// ADD WITH QUANTITY


function addProductQuantity(name,price){


for(let i = 0; i < quantity; i++){


cart.push({

name:name,

price:Number(price)

});


}



saveCart();


alert(quantity + " item added 🛒");


}







// ================= SAVE CART =================



function saveCart(){


localStorage.setItem(

"AM_cart",

JSON.stringify(cart)

);



updateCartCount();


}







// ================= CART COUNTER =================



function updateCartCount(){



let count = document.getElementById("cart-count");



if(count){


count.innerHTML = cart.length;


}


}








// ================= LOAD CART =================



function loadCart(){



let box = document.getElementById("cart-items");


let totalBox = document.getElementById("total");



if(!box){

return;

}



box.innerHTML="";



let total = 0;



if(cart.length === 0){


box.innerHTML = `

<h3>
Your cart is empty 🛒
</h3>

`;


if(totalBox){

totalBox.innerHTML=0;

}


return;


}







cart.forEach((item,index)=>{



total += item.price;



box.innerHTML += `


<div class="cart-item">


<h3>
${item.name}
</h3>


<p>
$${item.price}
</p>



<button onclick="removeProduct(${index})">

Remove

</button>



</div>


`;



});





if(totalBox){

totalBox.innerHTML = total;

}



}







// ================= REMOVE PRODUCT =================



function removeProduct(index){


cart.splice(index,1);


saveCart();


loadCart();


}








// ================= CHECKOUT WHATSAPP =================



function checkout(){



if(cart.length === 0){


alert("Your cart is empty");


return;


}




let message =

"Hello AM Sports,%0A%0AI want to order:%0A%0A";





cart.forEach(item=>{


message +=

"• "

+ item.name

+ " - $"

+ item.price

+ "%0A";


});





let total = cart.reduce(

(sum,item)=>sum + item.price,

0

);





message +=

"%0ATotal: $"

+ total;





window.open(

"https://wa.me/9647731297115?text="

+ message,

"_blank"

);



}







// ================= QUANTITY =================




function increaseQuantity(){


quantity++;


let q=document.getElementById("quantity");


if(q){

q.innerHTML=quantity;

}


}






function decreaseQuantity(){



if(quantity>1){


quantity--;


}



let q=document.getElementById("quantity");


if(q){

q.innerHTML=quantity;

}


}








// ================= SEARCH PRODUCTS =================




function searchProducts(){



let input = document

.getElementById("search")

.value

.toLowerCase();





let products = document

.querySelectorAll(".product-card");





products.forEach(product=>{



let name = product

.querySelector("h3")

.innerText

.toLowerCase();





if(name.includes(input)){


product.style.display="block";


}

else{


product.style.display="none";


}



});



}








// ================= CATEGORY FILTER =================



function filterProducts(){



let category = document

.getElementById("category")

.value;





let products = document

.querySelectorAll(".product-card");





products.forEach(product=>{


let productCategory =

product.getAttribute("data-category");





if(category==="all" || productCategory===category){


product.style.display="block";


}

else{


product.style.display="none";


}



});



}








// ================= PAGE LOAD =================



window.onload=function(){



updateCartCount();


loadCart();



};