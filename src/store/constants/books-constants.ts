import { AddBookFormValue } from "@/validations/bookValidation"

export enum BooksTypes {
  GET_BOOKS_LIST = '@BooksTypes/GET_BOOKS_LIST',
  SET_BOOKS_LIST = '@BooksTypes/SET_BOOKS_LIST',
  CHANGE_BOOK = '@BooksTypes/CHANGE_BOOK',
  SET_SELECTED_BOOK = '@BooksTypes/SET_SELECTED_BOOK',
  SET_ERROR_MESSAGE = '@BooksTypes/SET_ERROR_MESSAGE',
  DELETE_BOOK_BY_ID ='@BooksTypes/DELETE_BOOK_BY_ID',
  ADD_BOOK ='@BooksTypes/ADD_BOOK'
}
export interface IDeleteBookByIdAction {
  payload: number,
  type: BooksTypes.DELETE_BOOK_BY_ID
}
export interface IAddBookAction {
  payload: AddBookFormValue,
  type: BooksTypes.ADD_BOOK
}
export interface IChangeBookPayload {
  id:number,
  body:AddBookFormValue
}
export interface IChangeBookAction {
  payload: IChangeBookPayload,
  type: BooksTypes.ADD_BOOK
}
