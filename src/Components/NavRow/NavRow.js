import React from 'react';
import '../NavRow/NavRow.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function NavRow() {
  return (
    <Row className='navRow'>
        <div className='navDiv'>
            <Row className='txtRow'>
                <h1 className='navText'>Kata</h1>
                <h1 className='navText'>Completed</h1>
                <h1 className='navText'>Unfinished</h1>
                <h1 className='navText'>Authored</h1>
            </Row>
        </div>
    </Row>
  )
}
