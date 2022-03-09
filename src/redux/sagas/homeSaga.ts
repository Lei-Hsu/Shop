import { getAllProductApi, Response } from 'axios/home';
import { ProductType } from 'interface/I_product';

import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  getAllProduct,
  setAllProduct,
  setHomeError,
  setHomeLoading
} from '@Redux/slices/homeSlice';

// handler

// 拿所有產品
function* handelGetAllProducts() {
  yield put(setHomeLoading(true))
  try {
    const res: Response<ProductType[]> = yield call(getAllProductApi)

    const { data, status } = res
    if (status === 200) {
      yield put(setAllProduct(data))
    }
  } catch (error) {
    yield put(setHomeError(error.message))
  } finally {
    yield put(setHomeLoading(false))
  }
}

// watcher

// 拿所有產品
export function* watchHandelGetAllProducts() {
  yield takeLatest(getAllProduct, handelGetAllProducts)
}