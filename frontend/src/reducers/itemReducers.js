import {
    ITEM_LIST_FAIL,
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS
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

