import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';



const SellingPoints = () => {
  return (
    <div className="pt-4 pt-md-5">
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#goals" variant="dark">
      <Row className="border border-secondary bg-secondary border-4 rounded-3 p-4">
        <Col md={4} lg={3}>
          <ListGroup>
            <ListGroup.Item action href="#goals">
              Create Goals
            </ListGroup.Item>
            <ListGroup.Item action href="#limits">
              Set Spending Limits
            </ListGroup.Item>
            <ListGroup.Item action href="#suggestions">
              Budget Suggestions
            </ListGroup.Item>
            <ListGroup.Item action href="#more">
              Set Spending Limits
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={8} lg={9}>
          <Tab.Content>
            <Tab.Pane eventKey="#goals" >
              <h2 className='text-center'>Create Budgeting Goals</h2>
            </Tab.Pane>
            <Tab.Pane eventKey="#limits" >
            <h2 className='text-center'>Set Spending Limits</h2>
            </Tab.Pane>
            <Tab.Pane eventKey="#suggestions" >
            <h2 className='text-center'> Professional Budget Suggestions</h2>
            </Tab.Pane>
            <Tab.Pane eventKey="#limits">
              HELLO
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default SellingPoints