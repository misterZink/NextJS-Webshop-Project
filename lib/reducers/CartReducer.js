export const CART_ACTIONS = {
    ADD_TO_CART: "add",
    REMOVE_FROM_CART: "remove",
    RESET_CART: "reset",
};

export function cartReducer(state, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART:
            return { ...state, dogName: action.dogName };

        case CART_ACTIONS.REMOVE_FROM_CART:
            return { ...state.filter(dog => dog.breed !== action.breed)};

        case CART_ACTIONS.RESET_CART:
            return { state };

        default:
            return { ...state };
    }
}
