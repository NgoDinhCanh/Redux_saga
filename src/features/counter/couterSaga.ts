import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';

export function* log(action: PayloadAction) {
  console.log('action', action);
}

export default function* counterSaga() {
  console.log('counter saga');
  yield takeEvery('*', log);
}
