import React, { useEffect, useState } from 'react';
import './ModalForCabs.css';
import { Button } from 'react-bootstrap';
import CabData from '../components/CabData';

const EditEntry = ({ id, updatePrice }) => {
  const [price, setPrice] = useState('');
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  var index = CabData.map(function(e){
    return e.id
   }).indexOf(id)
  const handleSubmit = (e) => {
    e.preventDefault();

    let a =CabData[index]
    a.Price=price;
    closeModal(); 
  }
  useEffect(()=>{
    localStorage.getItem('Price');
  })
 
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
           
              <label className="form-label">
                Edit price:
                <input type="text" name="destination" value={price} className="form-input" onChange={(e) => setPrice(e.target.value)} />
              </label>
              <br />
              <button onClick={(e) =>handleSubmit(e)} type="submit" className="form-button">Update</button>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default EditEntry;
