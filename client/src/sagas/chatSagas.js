import { put } from 'redux-saga/effects';
import API from '../api';
import * as chatActionsCreator from '../actions/actionCreatos';

export function* getMessagesSaga() {
  try {
    const {
      data: { data },
    } = yield API.getMessages();
    yield put(chatActionsCreator.getMessageSuccess(data));
  } catch (error) {
    yield put(chatActionsCreator.getMessageError(error));
  }
}

export function* createMessageSaga() {
  try {
    yield API.createMeaasge(action.payload.message);
    // yield put(chatActionsCreator.getMessageSuccess(data));
  } catch (error) {
    yield put(chatActionsCreator.getMessageError(error));
  }
}
