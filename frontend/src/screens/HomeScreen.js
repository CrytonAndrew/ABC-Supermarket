import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Container, Button } from "react-bootstrap"

// Actions
import { listItems, itemCreate } from "../actions/itemActions.js"

// Component
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import Item from "../components/Item.js"

const HomeScreen = () => {
    const dispatch = useDispatch()

    const itemList = useSelector((state) => state.itemList)
    const { loading, error, products } = itemList

    const createItem = useSelector((state) => state.createItem)
    const {loading: loadingCreate, error: errorCreate, success: successCreate } = createItem

    
    
    useEffect(() => {
        dispatch(listItems())
    }, [dispatch, successCreate])

    const createHandler = (e) => {
        e.preventDefault()
        dispatch(itemCreate())
    }

    return (
        <Container>
            <div className="home-div">
                {loadingCreate && <Loader />}
                {errorCreate && <Message>{errorCreate}</Message>}
                {loading ? <Loader /> : error ? <Message>{error}</Message> : (<>
                <Row>
                    <Col lg={10}>
                        <h1>Products</h1>
                    </Col>
                    <Col lg={2}>
                        <Button variant="info" onClick={createHandler}>
                            Create Item
                        </Button>
                    </Col>
                </Row>
                <Row className="item-row">
                    {products.map((product) => (
                        <Col className="item-col" key={product._id} xs={12} sm={6} md={4} lg={4} xl={3}>
                            <Item product={product}/>
                        </Col>
                    ))}
                </Row>
            </>)}
            </div>
            
        </Container>
    )
}

export default HomeScreen
