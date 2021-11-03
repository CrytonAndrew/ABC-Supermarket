import React, {useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux"
import { LinkContainer } from 'react-router-bootstrap'

import { deleteItemById } from "../actions/itemActions"

const Item = ({product}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const deleteItem = useSelector((state) => state.deleteItem)
    const {success} = deleteItem

    useEffect(() => {

    }, [success])

    const deleteHandler = (e) => {
        e.preventDefault()
        if (window.confirm("Are you sure")) {
            dispatch(deleteItemById(product._id))
        }
    }

    return (
        <Card style={{ width: '18rem' }} className='my-3 item-card'>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
            <LinkContainer to={`/item/${product._id}`}><Button variant="primary" className="btn">View</Button></LinkContainer>
            { userInfo.isAdmin && (<Button variant="danger" onClick={deleteHandler}>Delete</Button>)}
        </Card.Body>
        </Card>
    )
}

export default Item
