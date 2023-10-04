import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import booksReducer from './books/types/BooksState'



export const store = configureStore({
    reducer: {
        books: booksReducer
    }
});


//export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;