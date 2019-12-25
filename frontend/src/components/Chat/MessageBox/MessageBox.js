import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const MessageBox = ({onSendMessage: pushSendMessage}) => {
  const [message, setMessage] = useState("");

  return (
    <TextField
      fullWidth
      id = "standard-basic"
      label = "Message"
      multiline
      rows="4"
      value={message}
      onChange={ event => setMessage(event.target.value)}
      onKeyDown={ event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          pushSendMessage({body: message});
          setMessage('');
        }
      }}
    />
  )
}
export default MessageBox;
