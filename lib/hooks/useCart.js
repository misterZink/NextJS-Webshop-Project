import {useContext} from "react";
import {CartContext} from "../../components/context/CartProvider";

export default function useCart() {
    return useContext(CartContext);
}
