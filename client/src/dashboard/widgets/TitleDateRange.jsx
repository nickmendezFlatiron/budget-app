import React,  {useState} from 'react';
import { useLocation } from 'react-router-dom'

import { DayPicker } from 'react-day-picker';
import {getYear, subWeeks, getMonth, format } from 'date-fns';
import 'react-day-picker/dist/style.css';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import DropDownButton from 'react-bootstrap/DropDownButton'


const TitleDateRange = ({timeFrame, handleTimeFrameChange, selectedCategory}) => {
  const {pathname}  = useLocation();
  
  const today = new Date()
  const renderDate = (day = today) => {
    const d = new Date(day)
    const options = {month: 'long', day: 'numeric', year: 'numeric'};
    return new Intl.DateTimeFormat('en-US', options).format(d)
  }
  const defaultRange = {
      from: new Date(getYear(today), getMonth(today), 1),
      to: today
  }
  const [range, setRange] = useState(defaultRange)
  const renderPageTitle = selectedCategory === "all" ? pathname.slice(1) : selectedCategory ;
  const renderButtonTitle = range.from === range.to ? renderDate(range.from) : `${renderDate(range.from)} - ${renderDate(range.to)}` ;
  let footer =  <Col className="d-flex justify-content-around mt-2">
                  <Button onClick={()=>{setRange({to: today , from: today})}}  variant="secondary" size="sm" className='text-white'>Today</Button>
                  <Button onClick={()=>{setRange({to: today , from: subWeeks(new Date(), 1)})}} variant="secondary" size="sm" className='text-white'>Past Week</Button>
                  <Button onClick={()=>{setRange(defaultRange)}} variant="secondary" size="sm" className='text-white'>This Month</Button>
                </Col>
  
  return (
    <>
      <Row xs={1} sm={1} md={2} className="pt-3">
        <Col className="text-center text-md-start  py-2 py-md-0 px-0"> 
          <h2 className='text-uppercase fw-light text-secondary'>{renderPageTitle}</h2>
        </Col>
        <Col className="text-center text-white text-md-end px-0"> 
            <DropDownButton
              menuVariant="dark"
              title={renderButtonTitle}
              >
                <DayPicker
                  mode="range"
                  defaultMonth={today}
                  selected={range}
                  footer={footer}
                  onSelect={setRange}
                />
            </DropDownButton>
        </Col>
      </Row>
    </>
  )
}

export default TitleDateRange;
