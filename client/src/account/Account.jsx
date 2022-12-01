import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Account = ({user}) => {
  const [isDisabled, toggleDisabled] = useState(true)


  return (
    <div className="bg-dark text-white vh-100">
      <Container >
        <Row className="text-primary pt-3">
          <h1>{!isDisabled ? "Edit" : null } {user.username}'s Profile</h1>
        </Row>
        <Row xs={1} md={2} className="bg-secondary bg-opacity-25 rounded glow p-5 ">
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
            <ToggleButton
            className='mt-3'
            id="toggle-check"
            type="checkbox"
            variant='outline-primary'
            checked={!isDisabled}
            onChange={(e) => toggleDisabled(!e.currentTarget.checked)}
            >
              Edit Profile
            </ToggleButton>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Account