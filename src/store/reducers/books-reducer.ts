import { IBookDTO } from '@/interfaces/interfaces';
import { BooksTypes } from '../constants/books-constants';

export type InitialStateType = {
 books?:IBookDTO[];
 selectedBook?:IBookDTO;
 errorMessage?:string
};

export const initialState: InitialStateType = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const booksReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case BooksTypes.SET_BOOKS_LIST:
      return {
        ...state,
        books: action.payload,
      };
      case BooksTypes.SET_SELECTED_BOOK:
        return {
          ...state,
          selectedBook: action.payload,
        };
        case BooksTypes.SET_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.payload,
        };
    default:
      return state;
  }
};
export default booksReducer;
