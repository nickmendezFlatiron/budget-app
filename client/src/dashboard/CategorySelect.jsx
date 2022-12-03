import React from 'react'
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

const CategorySelect = ({setSelectedCategory}) => {

  const {pathname} = useLocation();
  const selectSize = pathname === "/transactions" ? "md" : "lg";
  const options = [
    { value: 'all', label: 'All' },
    { value: 'auto', label: 'Auto' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'rent-utilities', label: 'Rent & Utilities' },
    { value: 'entertainment', label: 'Entertainment' }
  ]; 

  function handleChange(e){
    setSelectedCategory(e.target.value)
  }
  const renderOptions = options.map((option) =>{
    return <option value={option.value} key={option.value}>{option.label}</option>
  })
  const renderStyle = pathname === "/budget"? "underline-text-input bg-transparent text-secondary ps-0" : "bg-secondary text-warning bg-opacity-25 border-0 category-dropdown";
  return (
    <Form.Select
      size={selectSize}
      className={renderStyle}
      onChange={handleChange}
    >
      {renderOptions}
    </Form.Select>
    )
}
export default CategorySelect