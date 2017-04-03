import React from 'react';

const LandingPage = props => {
  return (
    <div>
      <div id="header" className="top-bar">
        <div className="small-12 large-12 columns">
        <button className="nav bar" onClick={props.homeLink}>Home</button>
        <button className="nav bar" onClick={props.registrationLink}>Register</button>
        <button className="nav bar" onClick={props.registrantsLink}>See Who is Coming</button>
        </div>
      </div>

      <center><div className="row">
        <div id="top" className="small-6 large-12 columns">
        <h1>{props.event.name}</h1>
        <h2>by {props.event.organizer}</h2>
        </div>
      </div></center>

      <div className="row">
        <div className="small-12 large-12 columns">
        <h3>Date & Time</h3>
        <p>{props.event.date.toDateString()}</p>
        <p>{props.event.date.toTimeString()}</p>
        <h3>Location</h3>
        <p>{props.event.venue}</p>
        <p>{props.event.address}</p>
        <h4>Description</h4>
        <p>{props.event.description}</p>
        </div>
        </div>
    </div>
  )
}

export default LandingPage;
