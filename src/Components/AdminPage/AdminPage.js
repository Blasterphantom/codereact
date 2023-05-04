import React from 'react';
import '../AdminPage/AdminPage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBarTop from '../NavBarTop/NavBarTop';
import UserBar from '../UserBar/UserBar';
import RandomComponent from '../RandomComponent/RandomComponent';
import AdminBar from '../AdminBar/AdminBar';


export default function AdminPage() {
  return (
    <Container fluid className='completedContainer'>

        <NavBarTop />

        <AdminBar />

        <RandomComponent />


    </Container>
  )
}
