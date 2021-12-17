let product;
let price=2350;
let quantity=0;
let cart=0;
let tax=0.04;
let total=0;
let user1="admin";
let pass1="password";

let userName=prompt('Enter your username:"admin" ');
let password=prompt('Enter your password:"password" ');
console.log(userName,password);

if(userName==user1 && password==pass1){
    document.write("Thanks for you're recent purchase " +userName);
}else{
    document.write("Create an account");
}

function Checkout(){
    product=prompt("What are you Buying? Hint* We only sell computers")
    quantity=prompt("How many would you like to purchase?")
    cart=price*quantity
    total=(cart*tax) + cart
    console.log(product ,quantity ,cart , tax, total)

}
function displayInfo(){
    document.write(`
    <p>Product: ${product}</p>
    <p>Quantity: ${quantity}</p>
    <p>Cart: ${cart}</p>
    <p>Tax: ${tax}</p>
    <p>Total: ${total}</p>
    `)
}
Checkout()
displayInfo()