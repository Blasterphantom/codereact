import React from 'react';
import '../AdminBar/AdminBar.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function AdminBar() {
  return (
    <Row className='userRowAdmin'>
        <div className='userDiv'>
            <Row className='usernameRow'>
                <div className='rectAdmin'></div>
                <h3 className='kyu'>4 Kyu</h3>
                <h1 className='username'>UserNameGoesHere</h1>
            </Row>

            <Row className='userInfo1'>
                <Col>
                    <Row className='marginLeft'>
                        <p className='greyTxt'>Name:</p>
                        <p className='whiteTxt'>Brandon Le</p>
                    </Row>

                    <Row className='marginLeft'>
                        <p className='greyTxt'>Honor:</p>
                        <p className='whiteTxt'>200</p>
                    </Row>
                </Col>

                <Col>
                    <Row className='marginLeft2'>
                        <p className='greyTxt'>Clan:</p>
                        <p className='whiteTxt'>CodeStackAcademy</p>
                    </Row>

                    <Row  className='marginLeft2'>
                        <p className='greyTxt'>Leaderboard Position:</p>
                        <p className='whiteTxt'>#320,230</p>
                    </Row>
                </Col>

                <Col>
                    <Row className='marginLeft3'>
                        <p className='greyTxt'>Total Completed Kata:</p>
                        <p className='whiteTxt'>80</p>
                    </Row>

                    <Row className='marginLeft3'>
                        <p className='greyTxt'>Total Authored Kata:</p>
                        <p className='whiteTxt'>2</p>
                    </Row>
                </Col>

            </Row>
        </div>
    </Row>
  )
}
