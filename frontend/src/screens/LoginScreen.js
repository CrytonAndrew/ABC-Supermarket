import React, {useEffect, useState} from 'react'
import {Form, Button, Container} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import { loginUser } from "../actions/userActions"
import Message from '../components/Message'
import Loader from '../components/Loader'

const LoginScreen = ({location, history}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userInfo} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [ history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setMessage('Please fill in all the fields')
        } else {
            dispatch(loginUser(email, password))
        }
    }
    return (
        <div className="login-div">
        <Container>
            <h2>Sign In</h2>
            {loading && <Loader/>}
            <Form className="login-form">
                {message && <Message>{message}</Message>}
                {error && <Message>{error}</Message>}
                <Form.Group onSubmit={submitHandler} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>

                <Form.Text className="text-muted">
                    If you do not have a profile you can create a new one <Link to="/register">here</Link>
                </Form.Text>
            </Form>
        </Container>
           
        </div>
    )
}

export default LoginScreen
