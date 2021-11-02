import axios from 'axios'

import {
    ITEM_LIST_FAIL,
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_DELETE_FAIL,
    ITEM_DELETE_REQUEST,
    ITEM_DELETE_SUCCESS,
} from "../constants/ItemConstants" 

import {logout} from "./userActions"

export const listItems = () => async(dispatch) => {
    try {
        dispatch({
            type: ITEM_LIST_REQUEST
        })

        const { data } = await axios.get('/api/items')

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteItemById = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: ITEM_DELETE_REQUEST })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/items/${id}/delete`, config)

        dispatch({
            type: ITEM_DELETE_SUCCESS
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                if (message === 'Not authorized, token failed') {
                dispatch(logout())
                }
                dispatch({
                type: ITEM_DELETE_FAIL,
                payload: message,
        })
    }
}

