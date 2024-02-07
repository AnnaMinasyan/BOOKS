import {all} from 'redux-saga/effects';
import {watchBooksType} from './books-saga';

export default function* rootSaga() {
  yield all([
    watchBooksType(),
  ]);
}
