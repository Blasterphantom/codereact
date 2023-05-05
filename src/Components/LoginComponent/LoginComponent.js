import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { login, GetLoggedInUserData } from "../Services/DataService";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Make function for button
  const handleSubmit = async () => {
    // We want our function to gather there username and password and with that data make api call
    // first we'll make an object then console log it
    let userData = {
      // structuring an object(opposite of destructuring) only works when they have the same variable
      username,
      password,
    };
    console.log(userData);
    let token = await login(userData);
    if (token.token != null) {
      localStorage.setItem("Token", token.token);
      await GetLoggedInUserData(username);
      navigate("/");
    }
  };

  return (
    <>
      <div className="newColor">
        <Row className="paddingOne">
          <Col className="paddingTwo">
            <Card className="newCard">
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center align-items-start pt-3">
                    <div>
                      {/* <img src={CodeReserve} height='auto' width='165px' alt='ReserveLogo' /> */}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div>
                      <p className=" align-self-start text-white text-center fs-2">
                        CodeReserve
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div>
                      <ListGroup className="paddingThree">
                        <Form.Control
                          className="listGroup"
                          type="email"
                          placeholder="Codewars Login"
                        />
                        <Form.Control
                          className="listGroup"
                          type="email"
                          placeholder="password"
                        />
                        {/* <Form.Control  className='listCuz' type="email" placeholder="Confirm Password"/> */}
                      </ListGroup>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="d-flex justify-content-center pt-4">
                      <Button className="newBtnbtn">Sign In</Button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div>
                      <p className="text-white text-center pt-5">
                        {" "}
                        <u>Log in </u>{" "}
                        <span>if you don't have an account already </span>{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
