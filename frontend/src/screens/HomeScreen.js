import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Container } from "react-bootstrap"

// Actions
import { listItems } from "../actions/itemActions.js"

// Component
import Loader from '../components/Loader.js'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const itemList = useSelector((state) => state.itemList)
    const { loading, error, products } = itemList
    
    useEffect(() => {
        dispatch(listItems)
    }, [dispatch])

    return (
        <div>
            {loading && <Loader />}
        </div>
    )
}

export default HomeScreen
