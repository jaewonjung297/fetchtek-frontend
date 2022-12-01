import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

export default function SignInPage() {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl: '/';
    return (
        <Container style =  {{maxWidth: "600px"}}>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className = "my-3">Sign In</h1>
            <Form>
                <Form.Group className = "mb-3" controlId = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type = "email" required></Form.Control>
                </Form.Group>
                <Form.Group className = "mb-3" controlId = "password">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type = "password" required></Form.Control>
                </Form.Group>
                <div className = "mb-3">
                    <Button type = "submit">Sign In</Button>
                </div>
                <div className = "mb-3">
                    New Customer?{' '}
                    <Link to ={`/signup?redirect=${redirect}`}>Sign Up!</Link>

                </div>
            </Form>
        </Container>
    )
}