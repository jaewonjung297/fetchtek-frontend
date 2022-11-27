import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
//import data from "../data";
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product";
import AOS from 'aos';
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox"

const Styles = styled.div`
    margin-top: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    #top-text-container {
        height: 25vh;
        width: 80vw;
        background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(28,184,215,1) 98%);
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 1rem;
        border-radius: 25px;
        margin-bottom: 2rem;
    }
    #text-alignment {
        display: flex;
        flex-direction: column;
        height: 65%;
    }
    #top-subtext {
       color: white;
       margin-bottom: 0;
    }
    #top-text {
        background: rgba(28,184,215,1);
        font-size: 4rem;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    @media only screen and (max-width: 650px) {
        #top-text {
            font-size: 3rem;
        }
    }
    @media only screen and (max-width: 440px) {
        #top-text {
            font-size: 2.5rem;
        }
    }
`;

const reducer = (state, action) => {
	switch(action.type) {
		case 'FETCH_REQUEST':
			return {...state, loading: true};
		case 'FETCH_SUCCESS':
			return {...state, products: action.payload, loading: false};
		case 'FETCH_FAIL':
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
};

function HomePage() {
	const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
		products: [],
		loading: true,
		error: '',
	})
    //const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({type: 'FETCH_REQUEST'});
			try {
				const result = await axios.get('api/products');
				dispatch({type: 'FETCH_SUCCESS', payload: result.data})
			} catch(err) {
				dispatch({type: 'FETCH_FAIL', payload: err.message})
			}
			
			//setProducts(result.data);
		};
		fetchData();
	}, [])
    return (
		<Styles>
			<h1>Featured Products</h1>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox varaint = "danger">{error}</MessageBox>
            ) : (
                <div data-aos="fade-left" data-aos-delay={200} className = "products">
                {products.map(product => (
                    <Product product = {product}></Product>
                    ))}
                </div>
            )}
		</Styles>
    );
}

export default HomePage;