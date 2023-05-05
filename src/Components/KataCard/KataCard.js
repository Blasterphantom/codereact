import React from 'react';
import '../KataCard/KataCard.css';
import { Row, Col, Button } from 'react-bootstrap';
import pfp from '../../Assets/Pfp.png';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../UserContext/UserContext';

export default function KataCard(props) {
    const [kata, setKata] = useState('')
    const data = useContext(UserContext)
    
  return (
    <>
    
    <div className='kataCard'>
        <Row className='cardRow'>
            <Col xs={2} className='cardCol'>
                <h3 className='cardKyu'>{data.searchKata.rank.name}</h3>
            </Col>

            <Col xs={4} className='cardCol2'>
                <h3 className='cardTitle'>{data.searchKata.name}</h3>
                <Row className='authorRow'>
                    <img className='pfpPic' src={pfp} />
                    <p className='authorName'>Author {data.searchKata.createdBy.username}</p>
                    <Button className='reserveKataBtn2'>Reserve Kata</Button>
                </Row>
            </Col>

            <Col xs={6} className='cardCol3'>
                <h3 className='cardKyu'>{data.searchKata.rank.name}</h3>
            </Col>
        </Row>

        <div className='card2Div'>
            <Row className='cardRow2'>
                <Col className='cardRow2Title'>
                    <h4 className='cardRow2TitleTxt'>Kata Description</h4>
                    <h4 className='cardRow2Txt'>{data.searchKata.description}</h4>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}
