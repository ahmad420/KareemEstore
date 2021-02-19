import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products.js'
import Rating from '../components/Rating'

const ProductsPage = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            {/* <ListGroup.item>
              <Rating
                value={product.rating}
                text={`${product.numOfReviews} reviews`}
              />
            </ListGroup.item> */}
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product.countInStock > 0 ? 'in stock ' : 'out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  {' '}
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductsPage
