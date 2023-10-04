import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, editTitle } from "./types/BooksState";
import Book from "./types/Book";
import { RootState } from "../store";

const BooksComponent: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState<number | string>("");
    const [author, setAuthor] = useState("");

    const [bookToEdit, setBookToEdit] = useState<null | Book>(null);
    const [titleToEdit, setTitleToEdit] = useState("");

    const booksArray = Object.values(useSelector((state: RootState) => state.books.books));


    const handleAddBook = () => {
        dispatch(addBook({ title, year: Number(year), author }));
        setTitle("");
        setYear("");
        setAuthor("");
    };

    const removeBook = (isbn: string) => {
        dispatch(deleteBook(isbn));
    };

    const changeTitleBook = () => {
        if (bookToEdit) {
            dispatch(editTitle({ isbn: bookToEdit.isbn, title: titleToEdit }));
            setBookToEdit(null);
        }




        
    };
    return (
        <div>
            <h1> Books in our library</h1>
            <input
                type="text"
                readOnly //не даем редактировать поле пользователям
                placeholder="Generated ISBN"
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Book Title"
            />
            <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Enter Year"
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter Author Name"
            />
            <button onClick={handleAddBook}>Add Book</button>

            <ol>
               
                {booksArray.map((book, index) => (
                    <li key={index} onClick={() => setBookToEdit(book)}>
                        {book.title} by {book.author} (ISBN: {book.isbn}, Year:{" "}
                        {book.year})
                        <button onClick={() => removeBook(book.isbn)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ol>

            {bookToEdit && (
                <div>
                    Редактируем титул: {bookToEdit.title}
                    <input
                        type="text"
                        value={bookToEdit.title}
                        onChange={(e) =>
                            setBookToEdit(
                                (prev) =>
                                    prev
                                        ? { ...prev, title: e.target.value }
                                        : null //вытряхиваем старое значение, если оно существуем изменяем
                            )
                        }
                        placeholder="Enter new title"
                    />
                    <button
                        onClick={() => {
                            changeTitleBook();
                            setBookToEdit(null); // закрываем форму редактирования после сохранения изменений
                        }}
                    >
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    );
};
export default BooksComponent;
