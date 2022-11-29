import React from 'react'
import { useForm } from "react-hook-form";

import CategorySelect from '../CategorySelect'

import Form from 'react-bootstrap/Form';

const TransactionFilters = ({selectedOption, setSelectedOption}) => {

  const { register, handleSubmit } = useForm();


  return (
   <Form>
    <Form.Group>
      <Form.Control aria-label="searchbar" className='bg-transparent text-light mb-2' type="text" placeholder='Keyword search...'/>
      <CategorySelect setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
    </Form.Group>
   </Form>
  )
}

export default TransactionFilters