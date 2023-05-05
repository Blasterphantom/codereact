import React from 'react';
import '../KataCard/KataCard.css';
import { Row, Col, Button } from 'react-bootstrap';
import pfp from '../../Assets/Pfp.png';

export default function KataCard() {
  return (
    <div className='kataCard'>
        <Row className='cardRow'>
            <Col xs={2} className='cardCol'>
                <h3 className='cardKyu'>6 Kyu</h3>
            </Col>

            <Col xs={4} className='cardCol2'>
                <h3 className='cardTitle'>This is a kata title.</h3>
                <Row className='authorRow'>
                    <img className='pfpPic' src={pfp} />
                    <p className='authorName'>AuthorOfThisKata</p>
                    <Button className='reserveKataBtn2'>Reserve Kata</Button>
                </Row>
            </Col>

            <Col xs={6} className='cardCol3'>
                <h3 className='cardKyu'>6 Kyu</h3>
            </Col>
        </Row>

        <div className='card2Div'>
            <Row className='cardRow2'>
                <Col className='cardRow2Title'>
                    <h4 className='cardRow2TitleTxt'>Kata Description</h4>
                    <h4 className='cardRow2Txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h4>
                </Col>
            </Row>
        </div>
    </div>
  )
}
