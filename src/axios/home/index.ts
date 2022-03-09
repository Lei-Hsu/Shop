import { productAxios } from '../index';

export interface Response<T> {
  data: T,
  status: number
}

export const getAllProductApi = () => (
  productAxios.get('products')
)