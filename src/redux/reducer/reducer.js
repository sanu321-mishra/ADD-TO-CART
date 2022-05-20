
const INIT_STATE = {
    carts: []

};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            //here we are matching the id of item send by us and item exist in product if 
            //the item already exist then we increse the qnty if its not then we add the product
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]//this will not delete the previos data
                }
            }

        case "DLT_CART":
            //here we return the data whose id is not matched 
            const data = state.carts.filter((el) => el.id !== action.payload);
            return {
                ...state, carts: data

            }

            //in this case if item is already present then decrese the qnty from carts
        case "REMOVE_ONE":
            const ItemIndex_decrement = state.carts.findIndex((item) => item.id === action.payload.id);

            if(state.carts[ItemIndex_decrement].qnty >=1 ){
                const dltitem =state.carts[ItemIndex_decrement].qnty -= 1
                console.log([...state.carts,dltitem])

                return{
                    ...state,
                    carts:[...state.carts]
                }
            }



        default:
            return state
    }
}