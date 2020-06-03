// 商品，  购物车商品， 购物车
import { combineReducers } from "redux"
import car from './car'
import products from './products'


export default combineReducers({
  car,
  products
})