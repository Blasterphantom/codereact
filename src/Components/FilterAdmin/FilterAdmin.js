import React from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import '../FilterAdmin/FilterAdmin.css';

export default function FilterAdmin() {
  return (
    <div className='filterAdminDiv'>
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
                        <Dropdown.Item href="#/action-2"><p className='dropTxt'>Kyu Ascending</p></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><p className='dropTxt'>Kyu Descending</p></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
        </Col>
    </div>
  )
}
