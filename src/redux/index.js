import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { todoSliceReducer } from "./todoSlice"


const reducers = combineReducers({
    todo: todoSliceReducer
})

export const store = configureStore({
    reducer: reducers
})