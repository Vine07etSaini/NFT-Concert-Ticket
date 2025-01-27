import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard(props) {
  return (
    <div className="event-card">
      <div className="card">
        <img 
          src={props.img} 
          className="card-img-top" 
          alt={props.heading} 
        />
        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <h6>Price: $5</h6>
          <p className="card-text">
            Some quick example text to build on the description.
          </p>
          <Link 
            to={{
              pathname: "/prices",
              state: {
                ticketAmount: 5 // Set ticket amount here
              }
            }}
            className="btn btn-primary"
          >
            {props.link}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
