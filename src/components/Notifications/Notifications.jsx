import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './Notifications.css'

const Notifications = ({ type, title, content}) => {
  return (
    <div className="notifications-container">
      <Alert variant="filled" severity={type}>
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </div>
  )
}

export default Notifications