import React from 'react'
import { useEffect, useState, navigate } from 'react'; 
import './UserCompleted.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserBar from '../UserBar/UserBar';
import NavRow from '../NavRow/NavRow';
import Filter from '../FilterComponent/Filter';
import NavBarTop from '../NavBarTop/NavBarTop';
import FooterComponent from '../FooterComponent/FooterComponent';
import KataCard from '../KataCard/KataCard';

export default function UserCompleted() {
  const [userInfo, setUserInfo] = useState({});

//   useEffect(() => {
//     if(JSON.parse(localStorage.getItem('userInfo')) === null) {
//         setUserInfo({isAdmin: false});
//         navigate('/LoginComponent');
//     } else {
//         setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
//     }
    
// }, []);

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
                <KataCard/>
            </div>


        </Row>

        <FooterComponent />

    </Container>
  )
}
