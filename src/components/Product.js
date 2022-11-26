import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from "./Rating";
import styled from "styled-components";
import { animated, useSpring } from 'react-spring';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Styles = styled.div`
    width: 12rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .5rem .5rem .5rem .5rem;
    padding: 0.5rem 0 0.5rem 0;
    box-shadow: 2px 4px 2px rgba(232, 234, 237, 0.3);
    text-align: center;
    
    :hover {
        cursor: pointer;
    }
    p {
        margin-bottom: 0;
    }
    .label {
        font-size: 1rem;
    }
    .model {
        font-size: 1.1rem;
    }
    .phoneImage {
        width: 30%;
        margin-bottom: 0.7em;
    }

    @media only screen and (max-width: 650px) {
        width: 9rem;
    }
    @media only screen and (max-width: 400px) {
        width: 8rem;
    }
    img {
      width: 10em;
      height: 20em;
  }
`;

function Product(props) {
    const {product} = props;

    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const springStyle = useSpring({
      from: {
          borderColor: hovered ? '#edeef0' : '#9ed5ff',
          scale: hovered ? 1 : 1.05
      },
      to: {
          borderColor: hovered ? '#9ed5ff' : '#edeef0',
          scale: hovered ? 1.05 : 1
      },
      config: {
          tension: 375
      }
  });

  const triggerIn = () => {
      setHovered(true);
  };

  const triggerOut = () => {
      setHovered(false);
  };

    return (
      <Styles as={animated.div} style={springStyle} onMouseEnter={triggerIn} onMouseLeave={triggerOut}>
        <Card key = {product.slug}>
        <div key = {product.slug}>
        <Link to = {`/product/${product.slug}`}>
          <img src = {product.image} alt = {product.name} />
        </Link>
        <Card.Body>
            <Link to = {`/product/${product.slug}`}>
            </Link> 
            <Card.Title>{product.name}</Card.Title>
            <Rating rating = {product.rating} numReviews = {product.numReviews} />
            <Card.Text>${product.price}</Card.Text>
            <Button>Add to Cart</Button>
        </Card.Body>
      </div>
      </Card>
      </Styles>
    )
};

export default Product;