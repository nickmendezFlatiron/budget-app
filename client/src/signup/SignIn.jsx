import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignIn = () => {
  const {pathname} = useLocation()
  const [display, setDisplay] = useState(pathname)

  function handleChangeForm(){
    display === '/login' ? setDisplay("/signup") : setDisplay("/login");
  }
  const renderTitle = display === '/login' ? "Log In" : "Sign Up"
  const renderOther =  display === '/login' ? " Click here to create an account." : "Have an account? Click here to log in."

  return (
    <div className='bg-dark'>
      <Container className="text-white rounded  pt-3">
        <Row className="bg-black bg-opacity-25 rounded rounded-4 vh-85">
          <Col md={{span: 10, offset:1}} lg={{ span: 5  }} className="my-5">  
            <h1 className='text-center title  mb-3 mt-3'>{renderTitle}</h1>
            <Form className="m-2 bg-black bg-opacity-50 rounded p-4">
              <Form.Group >
                <Row>
                  <Col>
                    <Form.Control className="mb-3 underline-text-input bg-transparent text-white" type="text" placeholder="Username..." />
                  </Col>
                 {display === '/signup' && <Col>
                    <Form.Control className="mb-3 underline-text-input bg-transparent text-white" type="text" placeholder="Name..." />
                  </Col>}
                </Row>
              </Form.Group>
              <Form.Group >
               {display === '/signup' && <Form.Control className="mb-3 underline-text-input bg-transparent text-white" type="email" placeholder="Email..." />}
              </Form.Group>
              <Form.Group >
                <Form.Control className="mb-3 underline-text-input bg-transparent text-white" type="password" placeholder="Password..." />
               {display === '/signup' &&  <Form.Control className="mb-3 underline-text-input bg-transparent text-white" type="password" placeholder="Password Confirmation (must match)..." />}
              </Form.Group>
              <Row>
                <Button size="lg" className="mt-2 text-white fw-bolder rounded-5" variant='primary'>{renderTitle}</Button>
                <Button onClick={handleChangeForm} className="mt-2 text-white border-0 rounded-5" variant='outline-dark'>{renderOther}</Button>
              </Row>
            </Form>
          </Col>  
          <Col className="">
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn