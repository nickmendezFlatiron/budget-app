import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const AccountsCollapse = ({children}) => {
  const [open, setOpen] = useState(false);

  const chevron = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
  return (
    <>  
       <h5
        onClick={() => setOpen(!open)}
        aria-controls="linked-accounts"
        aria-expanded={open}
        className="text-primary pointer-hover"
      >
        Linked Accounts {chevron}
      </h5>
      <Collapse in={open}>
        <div id="linked-accounts">
         {children}
        </div>
      </Collapse>
    </>
  )
}

export default AccountsCollapse