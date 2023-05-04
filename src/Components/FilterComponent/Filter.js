import React from 'react';
import '../FilterComponent/Filter.css';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

export default function Filter() {
  return (
    <div className='filterDiv'>
        <Col className='colFilter'>

            <div className='filterTxtDiv'>
                <h3 className='filterTxt'>Filters</h3>
            </div>
            
            <Row className='searchRow'>
                <input className='search' />
                <button className='magnify' />
            </Row>

            <div className='filterTxtDiv'>
                <h3 className='sortTxt'>Sort By</h3>
            </div>

            <Row className='dropDownRow'>
                <Dropdown className='dropDown'>
                    <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>

        </Col>
    </div>
  )
}
