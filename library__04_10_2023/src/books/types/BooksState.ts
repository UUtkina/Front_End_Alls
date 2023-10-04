import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Book from "./Book";
import { uid } from "uid";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

export interface BookState {
    books: Book[];
}
const initialState: BookState = {
    books: [
        {
            isbn: "1",
            title: "Harry Potter",
            year: 2001,
            author: "J.K. Rouling",
        },
        {
            isbn: "2",
            title: "Lord of the Rings",
            year: 1948,
            author: "Tolkien",
        },
    ],
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Omit<Book, "isbn">>) => {
            //тип Book, но без isbn свойства.
            state.books.push({ isbn: uid(), ...action.payload });
        },
        deleteBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(
                (book) => book.isbn !== action.payload
            );
        },
        editTitle: (
            state,
            action: PayloadAction<{ isbn: string; title: string }>
        ) => {
            state.books = state.books.map((book) => {
                if (book.isbn === action.payload.isbn) {
                    return { ...book, title: action.payload.title };
                }
                return book;
            });
        },
    },
});
export const { addBook, deleteBook, editTitle } = booksSlice.actions;
export default booksSlice.reducer;
