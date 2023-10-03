import { configureStore } from "@reduxjs/toolkit";
import sandwichReducer from '../sandwich/SandvichState';


const store = configureStore({
    reducer: {
        sandwich: sandwichReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
