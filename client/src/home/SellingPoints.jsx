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
              <Row className="justify-content-center pt-4 pt-md-0">
                <Col xs={9}>
                  <h2 className="text-warning text-uppercase">Personalized Suggestions</h2>
                  <h3 className=' overflow'>
                    Improve your spending habits with personalized budget suggestions from the pros.
                  </h3>
                </Col>
                <Col xs={3} className="text-end">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-dark w-75" viewBox="0 0 640 512">
                    <path d="M176 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM144 241.7v65.1l51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7V186.6c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5V160c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32v76.2l10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6v88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51V241.7l-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8H256.7c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 96c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm77.9 252.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z"/>
                  </svg>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="#more">
            <Row className="justify-content-center pt-4 pt-md-0">
                <Col xs={9}>
                  <h2 className="text-warning text-uppercase">And More!</h2>
                  <h3 className=' overflow'>
                    Track your expenses and savings over time with user-friendly tools. 
                    Customize your reports to display what is important to you.
                  </h3>
                </Col>
                <Col xs={3} className="text-end">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-dark w-75" viewBox="0 0 640 512">
                    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM96 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm352-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/>
                  </svg>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default SellingPoints