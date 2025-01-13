/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react"
import all_products from "../assets/all_product.js"


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};

    for(let i = 0; i < all_products.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }

const getTotalCartAmount = () => { 
    let totalAmount = 0;
    for (const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = all_products.find((product) => product.id === Number(item))
            totalAmount += itemInfo.new_price * cartItems[item];
        }
        
    }
    return totalAmount
}

const getTotalCartItems = () => {
    let totalItems = 0
    for(const item in cartItems){
        if(cartItems[item] > 0){
            totalItems += cartItems[item]
        }
    }
    return totalItems
}

const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const loginUser = (user) => {
    setUserData(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logoutUser = () => {
    setUserData(null);
    localStorage.removeItem("currentUser");
  };
    const contextValue = { all_products, cartItems, addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems,userData,loginUser,logoutUser}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;