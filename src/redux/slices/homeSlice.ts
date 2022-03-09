import { ProductType } from 'interface/I_product';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: {
    allProducts: ProductType[]
  }
  loading: boolean
  error: string
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: {
      allProducts: []
    },
    loading: false,
    error: ''
  } as CounterState,
  reducers: {
    getAllProduct: () => { },
    setAllProduct: (state, action: PayloadAction<ProductType[]>) => {
      const value = action.payload
      return {
        ...state,
        value: {
          ...state.value,
          allProducts: value
        }
      }
    },
    setHomeLoading: (state, action: PayloadAction<boolean>) => {
      const value = action.payload
      return {
        ...state,
        loading: value,
      }
    },
    setHomeError: (state, action: PayloadAction<string>) => {
      const value = action.payload
      return {
        ...state,
        error: value
      }
    }
  },
})

export const { getAllProduct, setAllProduct, setHomeLoading, setHomeError } = homeSlice.actions

export default homeSlice.reducer
