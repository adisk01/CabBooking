import React, { useState, useEffect } from 'react';
// import './Booking.css';
const Booking = ({ cab, time, path, mailto, totalcost, handleConfirm }) => {
  const [showmodal, setShowmodal] = useState(false);
 const handleClose = ()=>{
    setShowmodal(false);
 }
//  console.log(mailto);
//  const handleConfirm = () => {

//  }
  const confirmation = (cab, time) => {
    let minimumtime = time;
    let shortpath = path;
    let totalcost = cab.price * time;
    setShowmodal(true);
  }
  return (
    <>
      <td>{cab.name}</td>
      <td>{cab.price}</td>
      <td>{cab.id}</td>
      {showmodal && (
        <div className={'modal'}>
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <div>
              <h2>Booking Confirmation</h2>
              <p>Cab Name: {cab.name}</p>
              <p>Time: {time} minutes</p>
              <p>Path: {path}</p>
              <p>Total Cost: {totalcost}</p>
              <button onClick={confirmation}>Confirm</button>
            </div>
          </div>
        </div>
      )}
      <td><button onClick={() => confirmation(cab, time)}>Booking</button></td>
    </>
  )
}

export default Booking;
