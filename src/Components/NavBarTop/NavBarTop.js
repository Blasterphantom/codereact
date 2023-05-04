import React from 'react';
import '../NavBarTop/NavBarTop.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../../Assets/LogoMarcel.png';
import logOut from '../../Assets/LogOut.png';

export default function NavBarTop() {
  return (
    <Container fluid className='navContainer'>
        <Row className='navRowRow'>
            <div className='logoDiv'>
                <img src={logo} className='logo' />
                <h3 className='logoTxt'>CodeReserve</h3>
            </div>

            <div className='logOutDiv'>
                <img src={logOut} className='logOut' />
                <h3 className='logOutTxt'>Log Out</h3>
            </div>
        </Row>
    </Container>
  )
}
