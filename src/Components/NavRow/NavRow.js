import React from 'react';
import '../NavRow/NavRow.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function NavRow() {
  return (
    <Row className='navRow'>
        <div className='navDiv'>
            <Row className='txtRow'>
                <Button className='navText'>Kata</Button>
                <Button className='navText'>Completed</Button>
                <Button className='navText'>Unfinished</Button>
                <Button className='navText'>Authored</Button>
            </Row>
        </div>
    </Row>
  )
}
