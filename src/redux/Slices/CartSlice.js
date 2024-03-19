import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add : (state,action) => {
            state.push(action.payload);
        },
        remove : (state,action) => {
            return state.filter((item) => item.id !== action.payload);      // iss state ke andar wahi vali id ko retain karna jo current id ke equal na ho.
        },
    }
});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;