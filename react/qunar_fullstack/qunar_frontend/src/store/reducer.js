import { ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_CITY_DATA, ACTION_SET_IS_LOADING_CITY_DATA } from './action'
export default {
  // 页面状态  改变  对应数据的改变
  isCitySelectorVisible(state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE: 
        return payload
      default:
    }
    return state
  },
  cityData(state = null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload
      default:
    }
    return state
  },
  // 完成这个reducer的和相应action
  // 并且在fetchCityData中处理跟它相关的逻辑
  // isLoadingCityData
  isLoadingCityData(state = false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_LOADING_CITY_DATA:
        return payload
      default:
    }
    return state
  }
}