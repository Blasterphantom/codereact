import React from 'react'
import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './UserCompleted.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserBar from '../UserBar/UserBar';
import NavRow from '../NavRow/NavRow';
import Filter from '../FilterComponent/Filter';
import NavBarTop from '../NavBarTop/NavBarTop';
import FooterComponent from '../FooterComponent/FooterComponent';
import KataCard from '../KataCard/KataCard';
import { GetCodewarUserInfo } from '../Services/DataService';

export default function UserCompleted() {

  const [userInfo, setUserInfo] = useState({});

  let data;

  let navigate = useNavigate();

  // useEffect(() => {
  //   if(JSON.parse(localStorage.getItem('userInfo')) === null) {
  //       setUserInfo({isAdmin: false});
  //       navigate('/Login');
  //   } else {
  //       setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
  //   }
    
  // }, []);

  useEffect(() => {
    data = GetCodewarUserInfo();
  }, []);

  return (
    <Container fluid className='completedContainer'>

        <NavBarTop />

        <UserBar />

        <NavRow />

        <Row className='filterRow'>
            <div className='width82'>
                <Filter />
                <KataCard/>
            </div>


        </Row>

        {/* Marcel was here and crying */}

        <FooterComponent />

    </Container>
  )
}
