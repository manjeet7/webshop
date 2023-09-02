import React from 'react'
import products from '../assets/products'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from '../Component/Rating'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find((p)=>p._id===productId)
    console.log(product);
  return (
    <>
    <Link to="/">
        <button className='btn btn-light my-3'>Go Back</button>
    </Link>
    <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
             <Rating value={product.rating} text={`${product.numReviews} of reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
                Price : ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                Description : {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
           <Card>
           <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>Price: </Col>
                    <Col>{product.price}</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Status: </Col>
                    <Col>{product.countInStock>0?'InStock':'OutOfStock'}</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button className='btn-block'
                type='button'
                disabled={product.countInStock===0}>
                    Add Cart
                </Button>
            </ListGroup.Item>
           </ListGroup>
           </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen