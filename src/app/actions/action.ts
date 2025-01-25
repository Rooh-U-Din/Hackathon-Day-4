


export const addToCart = (product:Product) =>{
    const cart : Product[] = JSON.parse(localStorage.getItem("cart")||"[]")

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1){
        cart[existingProductIndex].quantity +=1
    }else{
        cart.push({
            ...product, quantity: 1
        })
    localStorage.setItem("cart",JSON.stringify(cart))
}
}

export const removeFromCart = (productId: string) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Filter and assign the result back to cart
    const updatedCart = cart.filter(item => item._id !== productId);
  
    // Update localStorage with the new cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


export const updateCartQuantity = (productId:string, stock:number) =>{
    const cart :Product[] = JSON.parse(localStorage.getItem("cart")||"[]")

    const productIndex = cart.findIndex(item=> item._id === productId)

        if(productIndex > -1){
            cart[productIndex].quantity = stock; 
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    
}
export const getCartItems = ():Product[]=>{
    return JSON.parse(localStorage.getItem("cart")||"[]")
}