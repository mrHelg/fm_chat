import produce from 'immer';
import ACTIONS from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  messages: [],
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_MESSAGE_REQUEST:
    case ACTIONS.CREATE_MESSAGE_REQUEST: {
      return produce((state, draftState) => {
        draftState.isFetching = true;
      });
    }

    case ACTIONS.CREATE_MESSAGE_ERROR:
    case ACTIONS.CREATE_MESSAGE_ERROR: {
      const {
        payload: { error },
      } = action;
      return produce((state, draftState) => {
        draftState.isFetching = false;
        draftState.error = error;
      });
    }

    case ACTIONS.GET_MESSAGE_SUCCESS: {
      const {
        payload: { messages },
      } = action;
      return produce((state, draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(...messages);
      });
    }

    case ACTIONS.CREATE_MESSAGE_SUCCESS: {
      const {
        payload: { message },
      } = action;
      return produce((state, draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(message);
      });
    }

    default:
      return state;
  }
}
