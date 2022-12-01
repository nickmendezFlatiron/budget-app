import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Account = ({user}) => {

  const indent = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="h1 " viewBox="0 0 16 16">
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
                </svg>
  return (
    <div className="bg-dark text-white vh-100">
      <Container >
        <Row className="text-primary pt-3">
          <h1>{indent} {user.username}'s Profile</h1>
        </Row>
        <Row xs={1} md={2} className="bg-secondary bg-opacity-25 rounded glow p-5 ">
          <Col className="text-center">
            <Image fluid src={user.avatar} alt="user avatar image" />
          </Col>
          <Col className="pt-3 bg-black bg-opacity-50 rounded rounded-3">
            <Form>
              <Form.Group>
                <Form.Control disabled type="text" placeholder="Name here..." className="underline-text-input bg-transparent w-auto text-secondary ps-0" value={user.username}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Name here..." className="underline-text-input bg-transparent w-auto text-secondary mt-2 ps-0" value={user.fullName}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" placeholder="Name here..." className="underline-text-input bg-transparent w-auto text-secondary mt-2 ps-0" value={user.email}/>
              </Form.Group>
            </Form>
            <Col className='mt-3'>
              <h5>Linked Accounts</h5>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Account