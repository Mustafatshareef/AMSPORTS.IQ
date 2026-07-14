let products =
JSON.parse(localStorage.getItem("products"))
|| [];





function addAdminProduct(){


let name =
document.getElementById("productName").value;


let price =
document.getElementById("productPrice").value;




products.push({

name:name,

price:Number(price)

});



localStorage.setItem(

"products",

JSON.stringify(products)

);



displayProducts();


}





function displayProducts(){


let box =
document.getElementById("admin-products");



box.innerHTML="";



products.forEach((p)=>{


box.innerHTML += `

<div>

<h3>${p.name}</h3>

<p>$${p.price}</p>

</div>

`;


});


}





displayProducts();