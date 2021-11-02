import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"

// Reducers
import {
    itemsListReducer,
    deleteItemReducer,
    createItemReducer,
} from "./reducers/itemReducers"

import {
    userLoginReducer
} from "./reducers/userReducer"

const reducer = combineReducers({
    itemList: itemsListReducer,
    userLogin: userLoginReducer,
    deleteItem: deleteItemReducer,
    createItem: createItemReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}


const middleware = [thunk]


const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

