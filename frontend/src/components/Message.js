import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children, dismis}) => {
  const [show, setShow] = useState(true)
    if (show) {
      return (
        <Alert className="message" variant={variant} onClose={() => setShow(false)} dismissible={dismis}>
          {children}
        </Alert>
      );
    }
    else {
      return (
        ""
      )
    }
}

export default Message