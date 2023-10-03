import { createSlice } from "@reduxjs/toolkit";



interface SandwichState {
    ingredients: string;
}

const initialState: SandwichState = {
    ingredients: ''
};

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            state.ingredients += ` +${action.payload}`;
        },
        clear: state => {
            state.ingredients = '';
        }
    }
});

export const { addIngredient, clear } = sandwichSlice.actions;
export default sandwichSlice.reducer;
