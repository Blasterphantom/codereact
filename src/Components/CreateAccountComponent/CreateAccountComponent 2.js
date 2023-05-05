// import React, { useState } from 'react'
// import {
//   Button,
//   Col,
//   Container,
//   Form,
//   Row
// } from 'react-bootstrap'
// import './Create.css'
// import CRALogo from '../Assets/CodewarsLOGO.png'

// export default function CreateAccountComponent() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (password !== confirmPassword) {
//       alert("Your passwords do not match!");
//       return;
//     }
  
//     let userData = {
//       username: username,
//       password: password,
//       confirmPassword: confirmPassword
//     };
    
//     console.log(userData);
//   };
  

//   return (
//     <div className='form-controller'>
//       <Container>
//         <Row className='father-bg'>
//           <img src={CRALogo} alt="" />
//           <h1>CodeReserve</h1>
//           <Col className='parent-bg'>
//             <Form className='mother-class'>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control
//                   className="input top"
//                   type="text"
//                   placeholder="Codewars Login"
//                   onChange={({target: {value}}) => setUsername(value)}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword">
//                 <Form.Control
//                   className="input"
//                   type="password"
//                   placeholder="Password"
//                   onChange={({target: {value}}) => setPassword(value)}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPasswordConfirm">
//                 <Form.Control
//                   className="input bottom"
//                   type="password"
//                   placeholder="Confirm Password"
//                   onChange={({target: {value}}) => setConfirmPassword(value)}
//                 />
//               </Form.Group>

//               <Form.Group className="checkbox" controlId="formBasicCheckbox">
//                 <Form.Check inline type="checkbox" label="Admin Account" />
//               </Form.Group>

//               <Button
//                 className='SignUp'
//                 // variant="primary"
//                 // type="submit"
//                 onClick={handleSubmit}
//               >
//                 Sign Up
//               </Button>
//               <p><a className='link' href="/Login">Log in</a> if you already have an account.</p>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

