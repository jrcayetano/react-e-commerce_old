import {combineReducers} from 'redux'

import shoppingProductReducer from './shopping.reducer'

const rootReducer = combineReducers({
  products: shoppingProductReducer,
})

export default rootReducer