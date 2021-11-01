import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Container } from "react-bootstrap"

// Actions
import { listItems } from "../actions/itemActions.js"

// Component
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import Item from "../components/Item.js"

const HomeScreen = () => {
    const dispatch = useDispatch()

    const itemList = useSelector((state) => state.itemList)
    const { loading, error, products } = itemList
    
    useEffect(() => {
        dispatch(listItems())
    }, [dispatch])

    return (
        <Container>
            {loading ? <Loader /> : error ? <Message>{error}</Message> : (<>
                <h1>Hello World</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} xs={12} sm={6} md={4} lg={4} xl={3}>
                            <Item product={product}/>
                        </Col>
                    ))}
                </Row>
            </>)}
        </Container>
    )
}

export default HomeScreen
