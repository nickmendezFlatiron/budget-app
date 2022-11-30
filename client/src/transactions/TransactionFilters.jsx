import React from 'react'
import { useForm } from "react-hook-form";

import CategorySelect from '../dashboard/CategorySelect'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const TransactionFilters = ({register, handleSubmit, setSelectedCategory}) => {

  
  const submitForm = (data, e) => {
    e.preventDefault();
    console.log(data)
  }
  const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="text-warning" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
  return (
   
    <Row xs={2} sm={2} className="mt-2 bg-black gy-2 bg-opacity-25 pb-2 rounded">
      <Col xs={12}>
        <InputGroup className=''>
          <Form.Control 
            {...register("searchbar")} 
            aria-label="searchbar" 
            className='bg-secondary bg-opacity-25 text-warning select-input' 
            type="text" 
            placeholder='Keyword search...'
            />
            <Button className="text-warning">{searchIcon}</Button>
        </InputGroup>  
      </Col>
      <Col className="">
        <CategorySelect 
          setSelectedCategory={setSelectedCategory}
        />
      </Col>

    </Row>
     
  )
}

export default TransactionFilters