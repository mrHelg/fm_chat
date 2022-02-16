import axios from 'axios';
import io from 'socket.io-client';
import store from '../store';
import { SOCKET_EVENTS } from '../constants';
import * as chatActionsCreators from '../actions/actionCreators'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

const socket = io('ws://localhost:3000');

socket.on(SOCKET_EVENTS.NEW_MESSAGE, (message) => {
  store.dispatch(chatActionsCreators.createMessageSuccess(message));
});

export const getMessages = () => httpClient.get('/');

export const createMessage = (message) =>
  socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message);
