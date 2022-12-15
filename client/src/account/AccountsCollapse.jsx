import React, {useState, useEffect} from 'react'
import { usePlaidLink } from 'react-plaid-link';

import useGetLinkToken from '../hooks/plaid-hooks/useGetLinkToken'
import useExchangeToken from '../hooks/plaid-hooks/useExchangeToken';

import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const AccountsCollapse = ({children, toggleShowToast}) => {
  const [openList, setOpenList] = useState(true);
  const [token, setToken] = useState(null)

  const chevron = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
  const account = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='text-warning' fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                  </svg>

  useEffect(()=>{
    const genToken = async () => {
    const linkToken = await useGetLinkToken()
    setToken(linkToken)
  }     
    genToken() 
  },[])
  
  const  PlaidLinkOptions = {
    onSuccess: (public_token, metadata) => {useExchangeToken(public_token, metadata)},
    onExit: (err, metadata) => {console.log("exit" ,{err, metadata})},
    onEvent: (eventName, metadata) => {console.log("event", {eventName, metadata})},
    token: token
  };
  
  const {  open, ready } = usePlaidLink(PlaidLinkOptions);
  return (
    <>  
       <h5
        onClick={() => setOpenList(!openList)}
        aria-controls="linked-accounts"
        aria-expanded={openList}
        className="text-primary pointer-hover mt-2"
        disabled={!ready}
      >
        Linked Accounts {chevron}
      </h5>
      <Collapse in={openList}>
        <div id="linked-accounts">
         {children}
         <Button
          size=""
          className="ms-0 ps-1 border-0 text-light"
          variant='outline-dark'
          onClick={() => open()}
            >{account} Connect a Financial Account</Button>
        </div>
        
      </Collapse>
    </>
  )
}

export default AccountsCollapse