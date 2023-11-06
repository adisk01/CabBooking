import React, { useState, useEffect } from 'react';
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import './Booking.css';
const Booking = ({ cab, minTime, time, path, mailto }) => {
  const [showModal, setShowModal] = useState(false);
  const minTimeInMillis = (minTime+330) * 60000;
  // let totalcost = cab.price * minTime;
  // Create a new Date object based on the provided 'time'
  const p = new Date(time);

  // Add minTimeInMillis to 'p'
  p.setTime(p.getTime() + minTimeInMillis);
  p.toISOString().toString();
  let totalcost = cab.price * minTime;
  // console.log(p);
  const handleClose = () => {
    setShowModal(false);
  }
  // console.log(mailto);
  const handleConfirm = () => {
    confirmAlert({
      title: 'Confirm Booking',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            async function fetchPath() {
              const  headers = {
                  "Content-Type": "application/json",
                  "mail": mailto,
                  "start_time": time,
                  "end_time": p,
                  "price": totalcost,
                  "source": path[0] + '',
                  "destination": path[path.length - 1] + '',
                }
                console.log(headers);
                setShowModal(false);
              const res = await axios.post(
                "https://cab-backend.onrender.com/api/bookings/create",
                headers
              );
              console.log(res.data);
              
            }
            fetchPath();
            async function updateCab() {
              // console.log(p);
              const  headers = {
                  "end_time": p,
                }
                console.log(headers);
              const res = await axios.put(
                `https://cab-backend.onrender.com/api/cabs/${cab._id}`,
                headers
              );
              console.log(res.data);
            }
            updateCab();
            
          }
        },
        {
          label: 'No',
          onClick: () => (setShowModal(false))
        }
      ]
    });
  }
  const confirmation = (cab, minTime) => {
    // let minimumtime = minTime;
    // let shortpath = path;
    // let totalcost = cab.price * minTime;
    setShowModal(true);
  }
  return (
    <>
      <td>{cab.name}</td>
      <td>{cab.price}</td>
      {/* <td>{cab.id}</td> */}
      {showModal && (
        <div className={'modal'}>
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <div>
              <h2>Booking Confirmation</h2>
              <p>Cab Name: {cab.name}</p>
              <p>minTime: {minTime} minutes</p>
              <p>Path: {path}</p>
              <p>Total Cost: {totalcost}</p>
              <button onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
      <td><button onClick={() => confirmation(cab, minTime)}>Booking</button></td>
    </>
  )
}

export default Booking;
