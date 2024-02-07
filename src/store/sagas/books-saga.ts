import { put, takeLatest } from 'redux-saga/effects';
import { bookApi } from '../../services/book-api';
import { BooksTypes, IAddBookAction, IChangeBookAction, IDeleteBookByIdAction } from '../constants/books-constants';
import { getBooksListAction, setBooksListAction } from '../actions/books-actions';

function* onGetBooksList(): Generator {
    try {
        const books = yield bookApi.getBooks()
        yield put(setBooksListAction(books))
    } catch (error) {
        console.log(error);
    }
}
function* onDeleteBookById({payload}:IDeleteBookByIdAction): Generator {
    try {        
        yield bookApi.deleteBookById(payload)
        yield put(getBooksListAction())
    } catch (error) {
        console.log(error);
    }
}
function* onAddBook({payload}:IAddBookAction): Generator {
    try {        
        yield bookApi.postBook(payload)
        yield put(getBooksListAction())
    } catch (error) {
        console.log(error);
    }
}
function* onChangeBook({payload}:IChangeBookAction): Generator {
    try {        
        yield bookApi.putBook(payload.id,payload.body)
        yield put(getBooksListAction())
    } catch (error) {
        console.log(error);
    }
}


export function* watchBooksType() {
    yield takeLatest(BooksTypes.GET_BOOKS_LIST, onGetBooksList);
    yield takeLatest(BooksTypes.DELETE_BOOK_BY_ID, onDeleteBookById);
    yield takeLatest(BooksTypes.ADD_BOOK, onAddBook);
    yield takeLatest(BooksTypes.CHANGE_BOOK, onChangeBook);

}
