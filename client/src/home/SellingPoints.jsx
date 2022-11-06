import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';



const SellingPoints = () => {
  return (
    <div className="pt-4 pt-md-5">
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#goals">
      <Row className="border border-secondary bg-secondary border-4 rounded-3 p-4">
        <Col md={4} lg={3}>
          <ListGroup className="shadow">
            <ListGroup.Item action href="#goals">
              Create Goals
            </ListGroup.Item>
            <ListGroup.Item action href="#limits">
              Set Spending Limits
            </ListGroup.Item>
            <ListGroup.Item action href="#suggestions">
              Personalized Suggestions
            </ListGroup.Item>
            <ListGroup.Item action href="#more">
              And More!
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={8} lg={9}>
          <Tab.Content>
            <Tab.Pane eventKey="#goals" >
              <Row className="justify-content-center pt-4 pt-md-0">
                  <Col xs={9}>
                    <h2 className="text-warning text-uppercase">Create Budgeting Goals</h2>
                    <h3 className=' overflow'>
                      Create and track goals for spending, saving, and managing your montly expenses.
                    </h3>
                  </Col>
                  <Col xs={3} className="text-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-dark w-75" viewBox="0 0 640 512">
                      <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm0 64c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm32-144c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/>
                    </svg>
                  </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="#limits" >
                <Row className="justify-content-center pt-4 pt-md-0">
                  <Col xs={9}>
                    <h2 className="text-warning text-uppercase">Set Spending Limits</h2>
                    <h3 className=' overflow'>
                      Trim down on unnecessary expenses by setting limits on any budget category you decide.
                    </h3>
                  </Col>
                  <Col xs={3} className="text-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-dark w-75" viewBox="0 0 640 512">
                      <path d="M150.6 502.6l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7V288H416V272c0-17.2 3.9-33.5 10.8-48H352V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-6-6-14.1-9.4-22.6-9.4s-16.6 3.4-22.6 9.4l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 109.3V224l-128 0H96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32H96V402.7L54.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0zM160 192V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192h64zM288 320V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H288zm240-80c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"/>
                    </svg>
                  </Col>
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="#suggestions" >
            <h2 className='text-center'> Personalized Budget Suggestions</h2>
            </Tab.Pane>
            <Tab.Pane eventKey="#more">
            <h2 className='text-center'> And More</h2>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default SellingPoints