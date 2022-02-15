import axios from 'axios';
import io from 'socket.io-client';
import store from '../store';
import { SOCKET_EVENTS } from '../constants';
import * as chatActionsCreators from '../actions/actionCreatos'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

const socket = io('ws://localhost');

socket.on(SOCKET_EVENTS.NEW_MESSAGE, (message) => {
  store.dispatch(chatActionsCreators.createMesssageSucces(message));
});

export const getMessages = () => httpClient.get('/');

export const createMessage = (message) =>
  socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message);
