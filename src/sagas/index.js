import {fork} from 'redux-saga/effects'
import auth from './auth'
import product from './product'
import customer from './customer'
import order from './order'

export default function* rootSaga() {
  yield fork(auth)
  yield fork(product)
  yield fork(customer)
  yield fork(order)
}