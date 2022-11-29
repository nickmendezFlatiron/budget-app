import React from 'react'
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';

const TransactionFilters = () => {

  const { register, handleSubmit } = useForm();


  return (
   <Form>
    <Form.Group>
      <Form.Control className='bg-transparent text-light' type="text" placeholder='Keyword search...'/>
    </Form.Group>
   </Form>
  )
}

export default TransactionFilters