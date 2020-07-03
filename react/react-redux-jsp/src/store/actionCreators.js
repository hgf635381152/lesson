import { GET_MY_LIST,CHANGE_INPUT, ADD_ITEM, DELETEITEM, GET_LIST } from './actionTypes'
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const addItemAction = () => ({
  type: ADD_ITEM
})
export const deleteItemAction = (index) => ({
  type: DELETEITEM,
  index
})
export const getListAction = (data) => ({
  type: GET_LIST,
  data
})
export const getMyListAction = () => ({
  type: GET_MY_LIST
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5ef561eb7548f861048c7f16/reactdemo1')
      .then((res) => {
        const data = res.data;
        const action = getListAction(data)
        dispatch(action)
      })
  }
}

