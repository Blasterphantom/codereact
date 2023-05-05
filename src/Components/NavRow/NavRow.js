import React, { useContext, useState } from 'react';
import '../NavRow/NavRow.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CodeWarsByChallenge } from '../Services/DataService';
import UserContext from '../../UserContext/UserContext';

export default function NavRow() {
  const [name, setName] = useState();
  const [clan, setClan] = useState('');
  const [honor, setHonor] = useState('');
  const [leaderBoard, setLeaderBoard] = useState('');
  const [totalAuthored, setAuthored] = useState('');
  const [totalCompleted, setCompleted] = useState('');
const data = useContext(UserContext)
const KataPull = async () => {
  const test = await CodeWarsByChallenge();
  console.log(test);
  data.setRandomKata(test);

}
  return (
    <Row className='navRow'>
        <div className='navDiv'>
            <Row className='txtRow'>
                <Button onClick={KataPull} className='navText'>Kata</Button>
                <Button className='navText'>Completed</Button>
                <Button className='navText'>Unfinished</Button>
                <Button className='navText'>Authored</Button>
            </Row>
        </div>
    </Row>
  )
}
