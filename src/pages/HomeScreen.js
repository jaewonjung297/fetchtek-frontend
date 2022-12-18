import { useEffect, useReducer, useState } from "react";
//import data from "../data";
import axios from 'axios';
import Product from "../components/Product";
import styled from 'styled-components'
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox"
import background from '../images/new.jpg';
const Styles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    #text-alignment {
        display: flex;
        flex-direction: column;
        height: 65%;
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
    img {
        width: 120%;
    }
    .background {
        display: flex;
        flex-direction: column;
        align-items: center;
        position:relative
    }
    h1 span {
        color: cyan;
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
	const [{loading, error, products}, dispatch] = useReducer(reducer, {
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
            <Styles>
                <img src = {background} className = "background"/>
                <h1 style = {{position: "absolute", top: "65%", color: "white", fontSize: "65px"}}>Buy and <span>Sell</span> Your Electronics</h1>
            </Styles>
			<h2>Featured Products</h2>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox varaint = "danger">{error}</MessageBox>
            ) : (
                <div data-aos="fade-left" data-aos-delay={200} className = "products">
                {products.slice(0, 4).map(product => (
                    <Product product = {product}></Product>
                    ))}
                </div>
            )}
		</Styles>
    );
}

export default HomePage;