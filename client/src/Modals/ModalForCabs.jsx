import React, { useState } from 'react';
import './ModalForCabs.css'
import uuid from 'react-uuid';
import CabData from '../components/CabData';
import { Button } from 'react-bootstrap';
const EditEntry = ({addEntry}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [endtime , setEndtime] =useState("");
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(true);
    }
  
    const closeModal = () => {
      setShowModal(false);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
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
                  Edit Name:
                  <input type="text" name="source" className="form-input" onChange={(e) => setSource(e.target.value)} />
                </label>
                <br />
                <label className="form-label">
                  Edit price:
                  <input type="text" name="destination" className="form-input" onChange={(e) => setDestination(e.target.value)} />
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
  
  export default EditEntry;


