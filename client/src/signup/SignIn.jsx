import React,{useState, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import useFetchPost from '../hooks/useFetchPost';
import { LoginContext } from '../context/LoginContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignIn = () => {
  const navigate =useNavigate();
  const {pathname} = useLocation()
  const [display, setDisplay] = useState(pathname)
  const {reset ,register, handleSubmit, formState:{errors}} = useForm()
  const {user, setUser, isAuthenticated, setAuthenticated} = useContext(LoginContext)
  function handleChangeForm(){
    reset()
    display === '/login' ? setDisplay("/signup") : setDisplay("/login");
  }

  const renderTitle = display === '/login' ? "Log In" : "Sign Up"
  const renderOther =  display === '/login' ? "Click here to create an account." : "Have an account? Click here to log in."
  const isRequired =  display === '/login' ? false : true;

  const handleSubmitForm = (data, e) => {
    e.preventDefault()
    useFetchPost({url:display, body: data}).then(data => {
      if (data?.errors) {
        console.log(data.errors)
      } else {
        setUser(data)
        setAuthenticated(true)
        navigate(`/account/${data.username}`)
      }
    }) 
  }

  if (isAuthenticated === true) {return navigate('/')} 

  return (
    <div className='bg-dark'>
      <Container className="text-white rounded  pt-3">
        <Row className="bg-gradient  rounded rounded-4 vh-85">
          <Col md={{span: 10, offset:1}} lg={{ span: 6, offset: 3  }} className="my-5">  
            <h1 className='text-center title  mb-3 mt-3'>{renderTitle}</h1>
            <Form onSubmit={handleSubmit(handleSubmitForm)} className="m-2 bg-black bg-opacity-75 shadow rounded p-4 ">
              <Form.Group >
                <Row>
                  <Col>
                    <Form.Control 
                      {...register("username", {required: "Username required, "})} 
                      className="mb-3 underline-text-input bg-transparent text-white" 
                      type="text" 
                      placeholder="Username..." 
                    />
                  </Col>
                 {display === '/signup' && <Col>
                    <Form.Control {...register("full_name", {required: {
                        value: isRequired,
                        message: "Full name is required."
                    }}) } className="mb-3 underline-text-input bg-transparent text-white" type="text" placeholder="First Last Name..." />
                  </Col>}
                </Row>
              </Form.Group>
              <Form.Group >
               {display === '/signup' && <Form.Control {...register("email", {required: {
                        value: isRequired,
                        message: "Email is required."
                    }})} className="mb-3 underline-text-input bg-transparent text-white" type="email" placeholder="Email..." />}
              </Form.Group>
              <Form.Group >
                <Form.Control {...register("password", {required: "Password is required."})} className="mb-3 underline-text-input bg-transparent text-white" type="password" placeholder="Password..." />
               {display === '/signup' &&  <Form.Control {...register("password_confirmation", { required: {
                        value: isRequired,
                        message: "Password Confirmation is required."
                    }})} className="mb-3 underline-text-input bg-transparent text-white" type="password" placeholder="Password Confirmation (must match)..." />}
              </Form.Group>
              <Row>
                <Button type="submit" size="lg" className="mt-2 text-white fw-bolder rounded-5" variant='primary'>{renderTitle}</Button>
                <Button onClick={handleChangeForm} className="mt-2 text-white border-0 rounded-5" variant='outline-dark'>{renderOther}</Button>
              </Row>
            </Form>
          </Col>  
          <Col className="rounded rounded-4">
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn