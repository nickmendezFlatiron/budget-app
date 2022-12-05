import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const CreditCardCollapse = ({children}) => {
  const [open, setOpen] = useState(false);

  const chevron = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
  const chevronUp = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                      <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
  const renderChevron = !open ? chevron : chevronUp;
  return (
    <>  
       <h2
        onClick={() => setOpen(!open)}
        aria-controls="linked-accounts"
        aria-expanded={open}
        className="text-warning pointer-hover"
      >
        Linked Accounts {renderChevron}
      </h2>
      <Collapse in={open}>
        <div id="linked-accounts">
         {children}
        </div>
      </Collapse>
    </>
  )
}

export default CreditCardCollapse 