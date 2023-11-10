import React, { useState } from 'react';
import './ModalForCity.css'
import uuid from 'react-uuid';


const CreateEntry = ({addEntry}) => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [time, setTime] = useState("");
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(true);
    }
  
    const closeModal = () => {
      setShowModal(false);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const ids = uuid();
      let uniqueid = ids.slice(0, 8);
      let a = source;
      let b = destination;
      let c = time;
      const newEntry = { _id: uniqueid, Source: a, Destination: b, Time: c };
     addEntry(newEntry);
    //   CityData.push({ _id: uniqueid, Source: a, Destination: b, Time: c });
      closeModal(); // Close the modal after submitting
    }
  
    return (
      <div>
        <button onClick={openModal}>Create Entry</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <form onSubmit={handleSubmit}>
                <label className="form-label">
                  Source City:
                  <input type="text" name="source"  required className="form-input" onChange={(e) => setSource(e.target.value)} />
                </label>
                <br />
                <label className="form-label">
                  Destination City:
                  <input type="text" name="destination" required className="form-input" onChange={(e) => setDestination(e.target.value)} />
                </label>
                <br />
                <label className="form-label">
                  Time:
                  <input type="number" name="time"required className="form-input" onChange={(e) => setTime(e.target.value)} />
                </label>
                <br />
                <button type="submit" className="form-button">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default CreateEntry;

