import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useLocation } from 'react-router-dom'

const TitleDateRange = ({timeFrame, handleTimeFrameChange, selectedCategory}) => {

  const {pathname}  = useLocation();
  
  const renderDate = () => {
    const d = new Date(Date())
    const options = {month: 'long', year: 'numeric'};
    return new Intl.DateTimeFormat('en-US', options).format(d)
  }

  const renderTitle = pathname === "/dashboard" ? renderDate() : `${selectedCategory} ${pathname.slice(1,pathname.length)}` ;

  return (
    <>
      <Row xs={1} sm={1} md={2} className="pt-3">
        <Col className="text-center text-md-start  py-2 py-md-0 px-0"> 
          <h2 className='text-uppercase fw-light text-secondary'>{renderTitle}</h2>
        </Col>
        <Col className="text-center text-md-end px-0"> 
          <ToggleButtonGroup type="checkbox" value={timeFrame} onChange={handleTimeFrameChange} className="">
            <ToggleButton id="week" value="Week">
              Week
            </ToggleButton>
            <ToggleButton id="month" value="Month">
              Month
            </ToggleButton>
            <ToggleButton id="custom" value="Custom">
              Custom
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
    </>
  )
}

export default TitleDateRange;
