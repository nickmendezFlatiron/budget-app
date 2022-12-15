import React, {useState} from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ToastHeader from 'react-bootstrap/ToastHeader'
import Toast from 'react-bootstrap/Toast'
const SuccessToast = ({showToast, toggleShowToast}) => {
  

  return (
    <ToastContainer position="middle-center">
      <Toast
        className="d-inline-block m-1"
         bg="dark"
         autohide={true}
         delay={7000}
         show={showToast}
         onClose={() => toggleShowToast(false)}
      >
        <Toast.Header
          closeButton
          className='text-dark'
        >
           <strong className="me-auto">Account Connection Status</strong>
        </Toast.Header>
        <Toast.Body  className="text-white">
            Hello, world! This is a toast message.
          </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default SuccessToast