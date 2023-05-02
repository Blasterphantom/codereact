import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap'
import './Create.css'
export default function CreateAccountComponent() {

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = () => {
    let userData = {
      Username : Username,
      Password : Password
    }
    console.log(userData)
  }
  return (
    <div className='form-controller'>
      < Container >
      <Row>
        <h1>Create an Account!</h1>
        <Col style={{backgroundColor: 'grey'}}>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
        onChange={({target : {value}}) => setUsername(value)}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password"
        placeholder="Password"
        onChange={({target : {value}}) => setPassword(value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button 
      variant="primary" 
      // type="submit"
      onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>

        </Col>
      </Row>
      </Container>
    </div>
  )
}
