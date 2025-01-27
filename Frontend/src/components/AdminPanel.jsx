import React from 'react';
import EventCard from './EventCard';
import './AdminPanel.css'; // Ensure you import the CSS file for styling

function AdminPanel() {
  return (
    <div className="admin-panel-container">
      <div className="event-card-grid">
        <EventCard
          heading="Tickets Remaining"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Tickets Sold"
          img="/coldplayConcert.jpg"
        />
        <EventCard
          heading="Profit"
          img="/doonMusicFestivalConcert.jpg"
        />
      </div>
    </div>
  );
}

export default AdminPanel;
