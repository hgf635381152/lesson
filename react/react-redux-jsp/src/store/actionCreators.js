import { CHANGE_INPUT, ADD_ITEM, DELETEITEM, GET_LIST } from './actionTypes'

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