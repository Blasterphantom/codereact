import React, { useContext, useState } from 'react'
import '../RandomComponent/RandomComponent.css';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import pfp from '../../Assets/Pfp.png';
import UserContext from '../../UserContext/UserContext';

export default function () {
    const [search, setSearch] = useState('');
const data = useContext(UserContext);



  return (
    <Row className='randomRow'>
        <div className='gradientDiv'>
            <div className='randomChallengeDiv'>
                <h3 className='randomTxt'>Random Challenge</h3>

                <Row className='dropDownRowRandom'>
                    <Dropdown className='dropDownRandom'>
                        <Dropdown.Toggle className='dropDownBtnRandom' id="dropdown-basic">
                            Choose a language
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><p className='dropTxtRandom'>C#</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><p className='dropTxtRandom'>Javascript</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><p className='dropTxtRandom'>Python</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><p className='dropTxtRandom'>Ruby</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><p className='dropTxtRandom'>Typescript</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>

                <Row className='dropDownRowRandom2'>
                    <Button className='reserveKataBtn'>
                        <h4 className='reserveKataTxt'>Reserve Kata</h4>
                    </Button>
                </Row>
                
            </div>

            <div className='randomKataDiv'>
                <Row className='randomKataDivRow'>

                    <Col xs={2} className='firstCol'>
                        <div>
                            <div className='rect3'></div>
                            <h3 className='randomKataDivRowTxt'>7 Kyu</h3>
                        </div>
                    </Col>

                    <Col className='secondCol'>
                        <h3 className='secondColTxt'>Randomly Chosen Kata</h3>
                        <Row className='secondColRow'>
                            <img className='pfpPic' src={pfp} />
                            <h4 className='pfpTxt'>AuthorOfThisKata</h4>
                        </Row>
                        <h4 className='kataDescriptionTitle'>Kata Description</h4>
                        <h4 className='kataDescriptionTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.</h4>
                    </Col>
                </Row>
            </div>
        </div>
    </Row>
  )
}
