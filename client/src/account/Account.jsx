import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Account = ({user}) => {
  const [isDisabled, toggleDisabled] = useState(false)

  const saveButton = <Button size='sm'>Update</Button>
  const pencil = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
  return (
    <div className="bg-dark text-white ">
      <Container className="py-4 ">
        <Row className="text-primary pt-3">
          <h1>{!isDisabled ? "Edit" : null } {user.username}'s Profile</h1>
        </Row>
        <Row xs={1} md={2} className="bg-secondary bg-opacity-25 rounded glow p-5">
          <Col className="text-center">
            <Image className='glow rounded-circle' fluid src={user.avatar} alt="user avatar image" />
          </Col>
          <Col className="py-3 bg-black bg-opacity-50 rounded rounded-3 shadow">
            <Form>
              <Form.Group>
                <Form.Control disabled type="text" placeholder="Name here..." className="underline-text-input bg-transparent w-auto text-secondary ps-0" value={user.username}/>
              </Form.Group>
              <Form.Group>
                <Form.Control disabled={isDisabled} type="text" placeholder="Name here..." className="underline-text-input bg-transparent w-auto text-secondary mt-2 ps-0" value={user.fullName}/>
              </Form.Group>
              <Form.Group>
                <Form.Control disabled={isDisabled} type="email" placeholder="Name here..." className="underline-text-input bg-transparent w-auto text-secondary mt-2 ps-0" value={user.email}/>
              </Form.Group>
            </Form>
            <Col className='mt-3 text-primary'>
              <h5>Linked Accounts</h5>
              <Col className="text-secondary">
                <h6>{user.linkedAccounts[0].institution}</h6>
              </Col>
            </Col>
            <div className='mt-3'>
              <ToggleButton     
              className="me-3 "         
              id="toggle-check"
              size='sm'
              type="checkbox"
              variant='outline-primary'
              checked={!isDisabled}
              onChange={(e) => toggleDisabled(!e.currentTarget.checked)}
              >
              {pencil} Edit Profile
              </ToggleButton>
              {!isDisabled ? saveButton : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Account