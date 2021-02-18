import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products.js'

const ProductsPage = ({ match }) => {
  const product = products.find((p) => p.id === match.params.id)

  return <><Link></Link></>
}

export default ProductsPage
