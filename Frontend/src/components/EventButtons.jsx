import React from 'react'
import { Link } from 'react-router-dom'
import './EventButton.css'


function EventButtons() {
  return (
    <div>
      <center>
      <div className="button-containe " style={{display:'inline'}} >
        <Link to="/" className="event-button btn">Upcoming</Link>
        <Link to="/"className="event-button btn">Past Events</Link>
        <Link to="/" className="event-button btn">Tickets</Link>
      </div>
      </center>
    
      
    </div>
  )
}

export default EventButtons
