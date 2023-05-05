import React from 'react';
import '../AdminPage/AdminPage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBarTop from '../NavBarTop/NavBarTop';
import UserBar from '../UserBar/UserBar';
import RandomComponent from '../RandomComponent/RandomComponent';
import AdminBar from '../AdminBar/AdminBar';
import FilterAdmin from '../FilterAdmin/FilterAdmin';
import FooterComponent from '../FooterComponent/FooterComponent';
import UserCard from '../UserCard/UserCard';


export default function AdminPage() {
  return (
    <Container fluid className='completedContainer'>

        <NavBarTop />

        <AdminBar />

        <RandomComponent />

        <Row className='filterRow2'>
            <div className='width82'>
                <FilterAdmin />
                <UserCard />
            </div>
        </Row>

        <FooterComponent />


    </Container>
  )
}
