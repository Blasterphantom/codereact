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
                        Alphabetically
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><p className='dropTxt'>A-Z</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><p className='dropTxt'>Z-A</p></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>

            <div className='filterTxtDiv'>
                <h3 className='sortTxt'>Languages</h3>
            </div>

            <Row className='dropDownRow'>
                <Dropdown className='dropDown'>
                    <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                        Choose a language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><p className='dropTxt'>A-Z</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><p className='dropTxt'>Z-A</p></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>

            <div className='filterTxtDiv'>
                <h3 className='sortTxt'>Difficulty</h3>
            </div>

            <Row className='dropDownRow'>
                <Dropdown className='dropDown'>
                    <Dropdown.Toggle className='dropDownBtn' id="dropdown-basic">
                    Select 8 Kyu (easy) - 1 Kyu (hard)
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><p className='dropTxt'>8 Kyu</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><p className='dropTxt'>6 Kyu</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><p className='dropTxt'>4 Kyu</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><p className='dropTxt'>2 Kyu</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-5"><p className='dropTxt'>1 Kyu</p></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>

        </Col>
    </div>
  )
}
