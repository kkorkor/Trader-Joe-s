stage = 'prod';
const host = stage === 'dev' ? 'http://localhost:4000'  : 'https://capston-traderjoe.xyz'

const stripe = Stripe('pk_test_51Krl5GLB7NGpofCggRvpmlI9dlZVDbnyvGL4WMmwCQgASTJZO4dRwfnMbtISp9VbzrHl7TVLUWn87BzE1oxkHfyt00nPxqy4oG');

const startCheckout = document.getElementById('Checkout');

startCheckout.addEventListener('click', () => {
    console.log("btn clicked");
    startCheckout.textContent = "Loading..."
    buyProducts(myProducts())
});

function myProducts() {
    const getProducts = JSON.parse(localStorage.getItem('productsInCart'));
  
    const products = [ ];
  
    console.log(getProducts);
    for( const property in getProducts) {
      products.push({
        tag: getProducts[property].tag,
        inCart: getProducts[property].inCart
      })
    }
  
    return products;
}  

async function buyProducts(cartProducts) {
    try {
    
      const body = JSON.stringify({
        products: cartProducts
      })
  
      const response = await axios.post(`${host}/checkout`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
  
      console.log(response.data);
  
  
    } catch (error) {
      console.log(error);
    }
}
