import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import uuid from 'react-uuid';
import fetchBankAccounts from "../hooks/query-hooks/fetchBankAccounts"
import LinkedAccount from './LinkedAccount'
import AccountsCollapse from './AccountsCollapse'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import ToggleButton from 'react-bootstrap/ToggleButton'
import SuccessToast from './SuccessToast';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from '../assets/avatar.png';

const Account = ({user, isAuthenticated}) => {
  const [isDisabled, toggleDisabled] = useState(true)
  const [showToast, toggleShowToast] = useState(false)
  const navigate = useNavigate()
  const {username} = useParams()
  const queryClient = useQueryClient()
  const accounts = useQuery({
    queryKey: ["linked_accounts"], 
    queryFn: fetchBankAccounts
  })
  console.log(accounts.isLoading)
  const saveButton = <Button size='sm'>Update</Button>
  const pencil = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
  const camera =    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-black" viewBox="0 0 16 16">
                      <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                    </svg>

  const renderAccounts = accounts.data?.map((account) => <LinkedAccount isDisabled={isDisabled} account={account} key={uuid()}/>)
  const renderButtonText = isDisabled ? " Edit Profile" : " Cancel" ;
  const loadAccounts = accounts.isLoading ? <Spinner animation="border" variant="primary" /> : renderAccounts ;
  
  if (isAuthenticated === false) {navigate("/")}
  return (
    <div className="bg-dark text-white vh-85">
      <Container className="py-4">
        <SuccessToast showToast={showToast} toggleShowToast={toggleShowToast}/>
        <Row className="text-primary pt-3 text-center text-md-start">
          <h1 className='ps-0 text-uppercase title fw-light text-secondary'> {!isDisabled ? "Edit" : null } My Profile</h1>
        </Row>
        <Row xs={1} md={2} className="bg-secondary bg-opacity-25 rounded glow py-60 p-5">
          <Col className="text-center mb-3 mb-md-0">
            <label className={`rounded-circle p-auto m-auto ${ !isDisabled ? "pointer-hover": null} position-relative`}>
              <Image 
                className='glow' 
                fluid src={avatar} 
                roundedCircle={true}
                alt="user avatar image" 
              />
              <input type="file" hidden disabled={isDisabled}/>
              <div 
                hidden={isDisabled}
                className="account-avatar-overlay"
                >
                {camera}
              </div>
            </label>
          </Col>
          <Col className="py-3 px-5 bg-black bg-opacity-50 rounded rounded-3 shadow ">
            <Form>
              <Form.Group>
                <Form.Control disabled type="text" placeholder="Name here..." className="border-0 fs-3  underline-text-input bg-transparent text-secondary py-0 ps-0" value={user?.username}/>
              </Form.Group>
              <Form.Group>
                <Form.Control disabled={isDisabled} type="text" placeholder="Name here..." className="underline-text-input bg-transparent text-secondary mt-2 ps-0" value={user?.full_name}/>
              </Form.Group>
              <Form.Group>
                <Form.Control disabled={isDisabled} type="email" placeholder="Name here..." className="underline-text-input bg-transparent text-secondary mt-2 ps-0" value={user?.email}/>
              </Form.Group>
            </Form>
            <Col className='mt-3 text-primary'>
                <AccountsCollapse toggleShowToast={toggleShowToast}>
                  {loadAccounts}
                </AccountsCollapse>
            </Col>
            <div className='pt-2'>
              <ToggleButton     
              className="me-3"         
              id="toggle-check"
              size='sm'
              type="checkbox"
              variant='outline-primary'
              checked={!isDisabled}
              onChange={(e) => {toggleDisabled(!e.currentTarget.checked) }}
              >
              {pencil}{renderButtonText}
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