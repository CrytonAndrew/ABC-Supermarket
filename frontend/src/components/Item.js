import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Item = ({product}) => {
    return (
        <Card style={{ width: '18rem' }} className='my-3 item-card'>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
            <Button variant="primary" className="btn">Update</Button>
            <Button variant="danger">Delete</Button>
        </Card.Body>
        </Card>
    )
}

export default Item
