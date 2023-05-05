import React from 'react';
import '../UserCard/UserCard.css';
import { Row } from 'react-bootstrap';
import arrow from '../../Assets/Arrow.png';

export default function UserCard() {
  return (
    <div className='userCard'>
        <div className='kataDiv1'>
            <Row className='kataRow1'>
                <div className='div1'>
                    <h3 className='txt1'>6 Kyu</h3>
                    <h3 className='txt2'>Username</h3>
                </div>
                <img className='arrow' src={arrow} />
            </Row>
        </div>
        <div className='kataDiv2'></div>
    </div>
  )
}
