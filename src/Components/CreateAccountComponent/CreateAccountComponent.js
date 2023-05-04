import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap'
import './Create.css'
import CRALogo from '../Assets/CodewarsLOGO.png'
import { Person } from '@mui/icons-material'
import LockIcon from '@mui/icons-material/Lock';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOn';
import { 
  ToggleOnOutlined,
  ToggleOffOutlined } from '@mui/icons-material'


export default function CreateAccountComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminChange = () => {
    setIsAdmin(!isAdmin);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords do not match!");
      return;
    }

    let userData = {
      username: username,
      password: password,
      confirmPassword: confirmPassword
    };

    console.log(userData);
  };


  return (
    <div className='form-controller'>
      <Container>
        <Row className='father-bg'>
          <Col className='parent-bg'>
            <Form className='mother-class'>
              <img src={CRALogo} alt="" />
              <h1>CodeReserve</h1>
              <div className='center-me top'>
                < Person />
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="Codewars Login"
                    onChange={({ target: { value } }) => setUsername(value)}
                  />
                </Form.Group>
              </div>


              <div className='center-me '>
                < LockIcon />

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className="input"
                    type="password"
                    placeholder='Confirm Password'
                    onChange={({ target: { value } }) => setPassword(value)}
                  />
                </Form.Group>
              </div>

              <div className='center-me bottom'>

                < LockIcon />
                <Form.Group controlId="formBasicPasswordConfirm">
                  <Form.Control
                    className="input"
                    type="password"
                    placeholder='Confirm password'

                    onChange={({ target: { value } }) => setConfirmPassword(value)}

                  />
                </Form.Group>
              </div>

              <Form>
      <Form.Group className="checkbox" controlId="formBasicCheckbox">
        <Form.Label>Admin Account</Form.Label>
        <span onClick={handleAdminChange}>
          {isAdmin ? <ToggleOnOutlined /> : <ToggleOffOutlined />}
        </span>
      </Form.Group>
    </Form>



              <Button
                className='SignUp'
                // variant="primary"
                // type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <p><a className='link' href="/Login">Log in</a> if you already have an account.</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

