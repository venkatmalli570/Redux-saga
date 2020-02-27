import { put, takeLatest, all } from 'redux-saga/effects';

function* ageUpAsync() {
  /*const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), ); */
  yield put({ type: "AGE_UP_ASYNC", value: 10 });
}

function* actionWatcher() {
  yield takeLatest("AGE_UP", ageUpAsync);
}


export default function* rootSaga() {
yield all([
actionWatcher(),
]);
}
