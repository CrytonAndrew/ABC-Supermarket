import {
    ITEM_LIST_FAIL,
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_DELETE_FAIL,
    ITEM_DELETE_REQUEST,
    ITEM_DELETE_SUCCESS
} from "../constants/ItemConstants"

export const itemsListReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case ITEM_LIST_REQUEST:
            return {loading: true, products: []}
        case ITEM_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case ITEM_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const deleteItemReducer = (state = {}, action ) => {
    switch(action.type) {
        case ITEM_DELETE_REQUEST:
            return { loading: true }
        case ITEM_DELETE_SUCCESS:
            return { loading: false, success: true }
        case ITEM_DELETE_FAIL:  
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}
