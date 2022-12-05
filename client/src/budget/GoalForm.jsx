import React, {useState} from 'react'
import CategorySelect from '../dashboard/CategorySelect';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GoalForm = () => {
  const [open, setOpen] = useState(false);

  const addSign = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                  </svg>

  const minusSign = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                       <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>

  const renderSign = open ? minusSign : addSign ;

  function handleCreateGoal(e){
    e.preventDefault();
    setOpen(false)
  }
  return (
    <>
      <div id="example-collapse-text">
        <p className=''>Create A New Goal</p>
          <Form onSubmit={handleCreateGoal} className="bg-black">
            <Row>     
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="Goal name..." className="underline-text-input bg-transparent text-secondary ps-0"/>
                  <Form.Control name='amount' type="number" min={0.01} step="0.01" placeholder="Goal amount..." className="underline-text-input bg-transparent text-secondary mt-2 ps-0"/>
                </Col>
                <Col xs={12} md={6} className="pb-3">
                  <Form.Control type="date"  className="underline-text-input bg-transparent text-secondary ps-0"/>
                  <CategorySelect />
                </Col>
            </Row>
            <Col className="pb-2">
              <Button 
                type='submit'
                size="sm" 
                className='me-3'
              >
                Create
              </Button>
              <Button 
                size="sm"
                variant='outline-primary'
              >
                Reset
              </Button>
            </Col>
          </Form>
      </div>

  </>
  )
}

export default GoalForm