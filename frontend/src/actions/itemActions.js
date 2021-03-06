import axios from 'axios'

import {
    ITEM_LIST_FAIL,
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_DELETE_FAIL,
    ITEM_DELETE_REQUEST,
    ITEM_DELETE_SUCCESS,
    ITEM_CREATE_FAIL,
    ITEM_CREATE_REQUEST,
    ITEM_CREATE_SUCCESS,
    ITEM_DETAILS_REQUEST,
    ITEM_DETAILS_SUCCESS,
    ITEM_DETAILS_FAIL,
    ITEM_UPDATE_REQUEST,
    ITEM_UPDATE_SUCCESS,
    ITEM_UPDATE_FAIL
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

export const itemCreate = () => async(dispatch, getState) => {
    try {
        dispatch({type: ITEM_CREATE_REQUEST})

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/items/create', {}, config)

        dispatch({
            type: ITEM_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ITEM_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getItemDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: ITEM_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/items/${id}`)

        dispatch({
            type: ITEM_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error){ 
        dispatch({
            type: ITEM_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const itemUpdate = (product) => async(dispatch, getState) => {
    try {
        dispatch({type: ITEM_UPDATE_REQUEST})

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/items/${product._id}`, product, config)

        dispatch({
            type: ITEM_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ITEM_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}