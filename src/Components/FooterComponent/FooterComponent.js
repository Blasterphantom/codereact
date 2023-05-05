import React from 'react';
import '../FooterComponent/FooterComponent.css';
import { Container, Row } from 'react-bootstrap';
import copy from '../../Assets/Copyright.png';
import git from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import twitter from '../../Assets/twitter.png';

export default function FooterComponent() {
  return (
    <Container fluid className='footerContainer'>
        <Row className='footerRow'>
            <div className='copyDiv'>
                <img className='copy' src={copy} />
                <h4 className='footerTxt'>2023 CodeStack Academy Day Class</h4>
            </div>

            <div className='socialDiv'>
                <img className='git' src={git} />
                <img className='linkedin' src={linkedin} />
                <img className='twitter' src={twitter} />
            </div>
        </Row>
    </Container>
  )
}
