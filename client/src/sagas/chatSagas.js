import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as chatActionsCreators from '../actions/actionCreators';

export function* getMessagesSaga() {
  try {
    const {
      data: { data },
    } = yield API.getMessages();
    yield put(chatActionsCreators.getMessageSuccess(data));
  } catch (error) {
    yield put(chatActionsCreators.getMessageError(error));
  }
}

export function* createMessageSaga(action) {
  try {
    yield API.createMessage(action.payload.message);
    // yield put(chatActionsCreator.getMessageSuccess(data));
  } catch (error) {
    yield put(chatActionsCreators.getMessageError(error));
  }
}
