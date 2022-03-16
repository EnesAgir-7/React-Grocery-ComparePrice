import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2> <br/>
              <h4>
                {product.brand}
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel


// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// import image1 from './../assets/banner1.png'
// import image2 from './../assets/banner2.png'
// import image3 from './../assets/banner3.png'

// const ProductCarousel = () => {
//     return (
//         <Carousel fade={true} pause={false}>
//             <Carousel.Item interval={2000}>
//                 <img className="d-block w-100"
//                 src={image1}
//                 alt="First slide"
//                 />
//             <Carousel.Caption>
//                 <h3></h3>
//                 <p></p>
//             </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//                 <img
//                 className="d-block w-100"
//                 src={image2}
//                 alt="Third slide"
//                 />
//             <Carousel.Caption>
//                 <h3></h3>
//                 <p></p>
//             </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//                 <img
//                 className="d-block w-100"
//                 src={image3}
//                 alt="Third slide"
//                 />
//             <Carousel.Caption>
//                 <h3></h3>
//                 <p></p>
//             </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     )
// }

// export default ProductCarousel;
