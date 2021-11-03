import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Form, Container, Image, Button} from "react-bootstrap"

import { getItemDetails, itemUpdate } from "../actions/itemActions"
import Loader from '../components/Loader'
import Message from '../components/Message'
import { ITEM_UPDATE_RESET } from '../constants/ItemConstants'

const ItemScreen = ({match, history}) => {
    const itemId = match.params.id

    const [name, setName]=useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()

    const getDetails = useSelector((state) => state.getDetails)
    const {loading, error, item} = getDetails

    const updateItem = useSelector((state) => state.updateItem)
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = updateItem

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (successUpdate) {  
            dispatch({type: ITEM_UPDATE_RESET})
            history.push('/')
        }
        if(!item._id || item._id !== match.params.id) {
                dispatch(getItemDetails(match.params.id))
        } else {
            setName(item.name)
            setDescription(item.description)
            setPrice(item.price)
            setImage(item.image)
        }
    }, [dispatch, item, match, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(itemUpdate({
            _id: itemId,
            name, 
            description,
            price,
            image
        }))
    }
    return (
        <Container>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message>{errorUpdate}</Message>}
            {loading ? <Loader/> : error ? <Message>{error}</Message> : (<>
                <Row>
                {userInfo.isAdmin && (<Col>
                <br/>
                <br/>
                <br/>
                <br/>
                    <h2>Update Information</h2>
                    <br/>
                    <br/>
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Item Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter item name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                 />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Description
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                 />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Image
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Image URL" 
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Price
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="number" 
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                 />
                            </Col>
                        </Form.Group>
                        <Button type="submit">
                            Update
                        </Button>
                        </Form>
                </Col>)}
                <Col>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Item Details</h2>
                    <br/>
                    <br/>
                    <Image src={item.image} alt="This is an image" className="item-image-screen"/>
                    <h3 className="item-name-screen">Name: {item.name}</h3>
                    <h3 className="item-description-screen">Description: {item.description}</h3>
                    <h3 className="item-price-screen">Price: {item.price}</h3>
                </Col>
            </Row>
            </>)}
        </Container>
    )
}

export default ItemScreen
