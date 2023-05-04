import React from 'react'
import '../UserCompleted/UserCompleted.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserBar from '../UserBar/UserBar';
import NavRow from '../NavRow/NavRow';
import Filter from '../FilterComponent/Filter';
import NavBarTop from '../NavBarTop/NavBarTop';

export default function UserCompleted() {
  return (
    <Container fluid className='completedContainer'>
        {/* <Row className='completedRow'>
            <Button className='logOutBtn'/>
            <h4 className='logOutTxt'>Logout</h4>
        </Row> */}

        <NavBarTop />

        <UserBar />

        <NavRow />

        <Row className='filterRow'>
            <div className='width82'>
                <Filter />
            </div>
        </Row>

    </Container>
  )
}
