import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';

const CategorySelect = () => 
{
  const [selectedOption, setSelectedOption] = useState('all');
  console.log(selectedOption)
  const options = [
    { value: 'all', label: 'All' },
    { value: 'auto', label: 'Auto' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'rent-utilities', label: 'Rent & Utilities' },
    { value: 'entertainment', label: 'Entertainment' }
  ]; 

  const renderOptions = options.map((option) =>{
    return <option value={option.value} key={option.value}>{option.label}</option>
  })

  return (
    <Form.Select
      size="lg"
      className="bg-light text-warning bg-opacity-25 border-0"
      onChange={(e)=>{setSelectedOption(e.target.value)}}
    >
      {renderOptions}
    </Form.Select>
    )
}
export default CategorySelect