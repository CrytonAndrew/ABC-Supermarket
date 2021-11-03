import {
    ITEM_LIST_FAIL,
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_DELETE_FAIL,
    ITEM_DELETE_REQUEST,
    ITEM_DELETE_SUCCESS,
    ITEM_CREATE_FAIL,
    ITEM_CREATE_REQUEST,
    ITEM_CREATE_RESET,
    ITEM_CREATE_SUCCESS,
    ITEM_DETAILS_REQUEST,
    ITEM_DETAILS_SUCCESS,
    ITEM_DETAILS_FAIL,
    ITEM_UPDATE_REQUEST,
    ITEM_UPDATE_SUCCESS,
    ITEM_UPDATE_FAIL,
    ITEM_UPDATE_RESET,
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

export const createItemReducer = (state = {}, action) => {
    switch(action.type) {
        case ITEM_CREATE_REQUEST:
            return {loading: true}
        case ITEM_CREATE_SUCCESS:
            return {loading: false, success: true, item: action.payload}
        case ITEM_CREATE_FAIL:
            return {loading: false, error: action.payload}
        case ITEM_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const getDetailsReducer = (state = { item: {} }, action ) => {
    switch(action.type) {
        case ITEM_DETAILS_REQUEST:
            return {...state, loading: true}
        case ITEM_DETAILS_SUCCESS:
            return {loading: false, item: action.payload}
        case ITEM_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const updateItemRedcuer = (state = { item: {}}, action ) => {
    switch(action.type) {
        case ITEM_UPDATE_REQUEST:
            return {loading: true}
        case ITEM_UPDATE_SUCCESS:
            return {loading: false, item: action.payload, success: true}
        case ITEM_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        case ITEM_UPDATE_RESET:
            return {}
        default:
            return state
    }
}