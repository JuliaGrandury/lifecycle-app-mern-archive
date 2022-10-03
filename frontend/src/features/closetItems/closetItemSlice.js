import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    closetItems: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const closetItemSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = closetItemSlice.actions
export default closetItemSlice.reducer