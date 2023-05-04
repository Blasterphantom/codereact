import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { login, GetLoggedInUserData } from '../Services/DataService';
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Make function for button
    const handleSubmit = async () => {
        // We want our function to gather there username and password and with that data make api call
        // first we'll make an object then console log it
        let userData = {
            // structuring an object(opposite of destructuring) only works when they have the same variable
            username,
            password
        }
        console.log(userData);
        let token =  await login(userData);
        if(token.token != null){
            localStorage.setItem("Token", token.token);
           await GetLoggedInUserData(username);
           navigate("/");
        }
        
    }
    
    return (
        <div>
            <Container>
                <Row className='newRow'>
                    <Col className='mt-5' style={{backgroundColor: 'Black',}}>
                        <h1 style={{ color: 'white'}} className='d-flex justify-content-center mb-4'>CodeReserve</h1>
                        <div className='newDiv'> 

                        <Form style={{ position: 'relative',width: ' 100% ' , height: ' 10em' }}>
                            <Form.Group  controlId="Username">
                                {/* <Form.Label>Username</Form.Label> */}
                                <Form.Control
                                style={{ width : '220px', marginBottom: '0px',}}
                                type="text"
                                placeholder="Enter username"
                                // Desconstructed object
                                onChange={({target: {value}}) => setUsername(value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Password">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control
                                style={{ width:' 222px', paddingTop: '4px'}}
                                type="password"
                                placeholder="Password"
                                // Deconstructed object
                                onChange={({target : {value}}) => setPassword(value)} />
                            </Form.Group>

                            <Button
                                style= {{ marginTop: '25px', width: '228px', marginRight: '5rem',}}
                                variant="danger"
                                onClick={handleSubmit}>
                                Sign In
                            </Button>
                        </Form>
                                    </div>
                        <h4 className='newDiv2 mt-4'><span>Signup</span> if you don't have an account yet</h4>
                        {/* <Button onClick={() => navigate('/')}>Create Account</Button> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
