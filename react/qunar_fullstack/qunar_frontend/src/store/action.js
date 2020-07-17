export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'SET_CITY_DATA';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA'

export function showCitySelector() {
  return {
    type: SET_IS_CITY_SELECTOR_VISIBLE,
    payload: true
  }
}

export function fetchCityData() {
  return (dispatch, getState) => {
    fetch('./rest/cities')
      .then(() => {
      dispatch(isLoading(true))
    })
    .then(res => res.json())
    .then(() => {
      dispatch(isLoading(false))
    })
    .then(cityData => {
      dispatch(setCityData(cityData))
    })
  }
}

export function setCityData(cityData) {
  return {
    type: SET_CITY_DATA,
    payload: cityData
  }
}

export function isLoading(loadingstate) {
  return {
    type: SET_IS_LOADING_CITY_DATA,
    payload: loadingstate
  }
}