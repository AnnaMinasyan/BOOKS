import { IBookDTO } from "@/interfaces/interfaces";
import { BooksTypes, IChangeBookPayload } from "../constants/books-constants";
import { AddBookFormValue } from "@/validations/bookValidation";


export const getBooksListAction = () => {
  return {
    type: BooksTypes.GET_BOOKS_LIST,
  };
}
export const setBooksListAction = (payload:IBookDTO[]|unknown) => {
    return {
      type: BooksTypes.SET_BOOKS_LIST,
      payload
    };
  }
  export const changeBookAction = (payload:IChangeBookPayload) => {
    return {
      type: BooksTypes.CHANGE_BOOK,
      payload
    };
  }
  export const setSelectedBookAction = (payload:IBookDTO) => {
    return {
      type: BooksTypes.SET_SELECTED_BOOK,
      payload
    };
  }
  export const setErrorMessageAction = (payload:string) =>     {
    return {
      type: BooksTypes.SET_ERROR_MESSAGE,
      payload
    };
  }
  export const deleteBookByIdAction = (payload:number) =>     {
    return {
      type: BooksTypes.DELETE_BOOK_BY_ID,
      payload
    };
  }
  export const addBookAction = (payload:AddBookFormValue) =>     {
    return {
      type: BooksTypes.ADD_BOOK,
      payload
    };
  }






