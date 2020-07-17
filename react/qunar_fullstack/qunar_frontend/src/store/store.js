import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'  // 异步状态修改

const store = createStore(
  combineReducers(reducer),
  applyMiddleware(thunk)
)

export default store;