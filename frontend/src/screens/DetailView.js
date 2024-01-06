import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

function DetailView() {
  const {id} = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try{
        const {data} = await axios.get(`/api/products/${id}/`);
        setProduct(data);
      }catch(error){
        console.log('asd')
      }
    }

    fetchProduct();
  }, []);

  return (
    <div>
              <Card.Body>
            <a href ={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>

                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={'#f8e825'}
                        />
                    </div>
                </Card.Text>

                <Card.Text as='h3'>
                    {product.price}
                </Card.Text> 
            </a>
        </Card.Body>
    </div>
  );
}

export default DetailView;
