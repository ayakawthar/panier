var products = {
    'Basketball': {'price':10, 'qty':0},
    'Football': {'price':15, 'qty':0},
    'Baseball': {'price':7, 'qty':0}
};

var cart = {};
var total = 0;

document.getElementById('1').onclick = function(){addToCart('Basketball')};
document.getElementById('2').onclick = function(){addToCart('Football')};
document.getElementById('3').onclick = function(){addToCart('Baseball')};

function addToCart(productName){
    
    if(productName in cart) {
        cart[productName]++;
    } else {
        cart[productName]=1;
    }

    
    products[productName]['qty']++;
    
    
    total += products[productName]['price'];

    document.getElementById('total').innerText = "price+total"
    document.getElementById('cartItems').innerText = JSON.stringify(cart);
}