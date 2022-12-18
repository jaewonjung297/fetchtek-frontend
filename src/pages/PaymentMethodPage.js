import React, { useEffect } from 'react';
import CheckOutSteps from '../components/CheckOutSteps';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate} from 'react-router-dom';
import { Store } from '../Store';
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';

export default function PaymentMethodPage() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { shippingAddress, paymentMethod },
    } = state;
    useEffect(() => {
        if (!shippingAddress.address) {
            navigate('/shipping');
        }
    }, [shippingAddress, navigate])
    const [paymentMethodName, setPaymentMethod] = useState(paymentMethod || 'PayPal');
    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName});
        localStorage.setItem('paymentMethod', paymentMethodName);
        navigate('/placeorder');
    };
    return <div>
        <CheckOutSteps step1 step2 step3></CheckOutSteps>
        <div className = "container small-container">
            <Helmet>
                <title>Payment Method</title>
            </Helmet>
            <h1 className = "my-3">Payment Method</h1>
            <Form onSubmit = {submitHandler}>
                <div className = "mb-3">
                    <Form.Check
                        type = "radio"
                        id = "PayPal"
                        label = "PayPal"
                        value = "PayPal"
                        checked = {paymentMethodName === 'PayPal'}
                        onChange = {(e) => setPaymentMethod(e.target.value)}
                    />
                    <Form.Check
                        type = "radio"
                        id = "Stripe"
                        label = "Stripe"
                        value = "Stripe"
                        checked = {paymentMethodName === 'Stripe'}
                        onChange = {(e) => setPaymentMethod(e.target.value)}
                    />
                </div>
                <Button type = "submit">Continue</Button>
                <Button href = "/shipping" variant = "secondary">Back</Button>
            </Form>
        </div>
    </div>
}