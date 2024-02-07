import { IBookDTO } from "@/interfaces/interfaces";

export const booksSelector = (state: { booksReducer: { books: IBookDTO[] } }) => state.booksReducer.books;
export const selectedBookSelector = (state: { booksReducer: { selectedBook: IBookDTO } }) => state.booksReducer.selectedBook;
export const errorMessageSelector = (state: { booksReducer: { errorMessage: string } }) => state.booksReducer.errorMessage;
