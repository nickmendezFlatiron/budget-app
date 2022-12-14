import React, {useState} from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ToastHeader from 'react-bootstrap/ToastHeader'
import Toast from 'react-bootstrap/Toast'
const SuccessToast = () => {
  const [open, toggleOpen] = useState(false)

  return (
    <ToastContainer position="middle-center">
      <Toast
        className="d-inline-block m-1"
         bg="dark"
         autohide={true}
         delay={5000}
         show={open}
         onClose={() => toggleOpen(false)}
      >
        <Toast.Header
          closeButton
        >
           <strong className="me-auto">Connect an Account Status</strong>
        </Toast.Header>
        <Toast.Body  className="text-white">
            Hello, world! This is a toast message.
          </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default SuccessToast