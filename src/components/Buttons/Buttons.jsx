import React from 'react'

import {Button, Form} from 'react-bootstrap';

const Buttons = ({ 
  refresh, 
  city, 
  handleChange, 
  status, 
  handleClick, 
  checkWeather, 
  refreshText 
}) => {

  return (
    <>
      <Form.Control 
        className="w-100 " 
        size="sm"
        type="text"
        value={city} 
        onChange={handleChange} 
        disabled={status === "submitting"} 
        placeholder="Enter City..." 
      />
      <Button 
        className="mt-2" variant="dark" size="sm"
        onClick={handleClick} 
        disabled={city?.length === 0 || status === "submitting"} >
          {checkWeather}
      </Button>
      <Button 
        className="mt-2 ms-1" 
        variant="outline-secondary" 
        size="sm" onClick={refresh}>
          {refreshText}
      </Button>
    </>
  );
}

export default Buttons;