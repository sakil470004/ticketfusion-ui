// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('easy-bazar-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('easy-bazar-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('easy-bazar-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


const deleteShoppingCart = () => {
    localStorage.removeItem('easy-bazar-cart');
}
const cartTotalItems = () => {
    const shoppingCart = getShoppingCart();
    let count = 0;
    for (const id in shoppingCart) {
        count = count + shoppingCart[id];
    }
    return count;
}
const cartTotalType = () => {
    const shoppingCart = getShoppingCart();
    return Object.keys(shoppingCart).length;
}
const changeDesiredQuantity = (id, quantity) => {
    const shoppingCart = getShoppingCart();
    shoppingCart[id] = quantity;
    localStorage.setItem('easy-bazar-cart', JSON.stringify(shoppingCart));
}
export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
    cartTotalItems,
    cartTotalType,
    changeDesiredQuantity
}