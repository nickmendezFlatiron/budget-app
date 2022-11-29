import React from 'react'
import { useForm } from "react-hook-form";

import CategorySelect from '../CategorySelect'

import Form from 'react-bootstrap/Form';

const TransactionFilters = ({register, handleSubmit, setSelectedCategory}) => {

  
  const submitForm = (data, e) => {
    e.preventDefault();
    console.log(data)
  }

  return (
   <Form onSubmit={handleSubmit(submitForm)}>
    <Form.Group>
      <Form.Control 
        {...register("searchbar")} 
        aria-label="searchbar" 
        className='bg-secondary bg-opacity-25 text-warning mb-2 select-input' 
        type="text" 
        placeholder='Keyword search...'
      />
      <CategorySelect 
        setSelectedCategory={setSelectedCategory}
      />
    </Form.Group>
   </Form>
  )
}

export default TransactionFilters