import {createContext, useReducer} from "react";
import {cartReducer} from "../../lib/reducers/CartReducer";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
