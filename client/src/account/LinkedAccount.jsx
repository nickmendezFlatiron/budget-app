import React from 'react';

const LinkedAccount = ({account, isDisabled}) => {

  const dash =  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className='text-danger me-2 my-1 pointer-hover' viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                </svg>
  return (
    <div className='px-1 d-flex highlight text-secondary rounded'>
        {!isDisabled ? dash : null}
        <h6 className='mb-0 p-1'>{account.institution}</h6>
    </div>
  )
}

export default LinkedAccount

 