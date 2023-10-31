import React, { useState } from "react";
import './form.css';

const getCabData = () => [
  { name: 'OLA', price: '10', availability: 'Yes' },
  { name: 'UBER', price : '11', availability: 'Yes' },
  { name: 'RAPIDO', price : '12', availability: 'Yes' },
  { name: 'LYFT', price : '13', availability: 'Yes' },
  { name: 'BOLT', price : '14', availability: 'Yes' }
];

const getRoute  =  [
    "Bombay",
    "Delhi",
    "Mumbai"
];

const AddCity = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const cabData = getCabData();
//   const 

  return (
    <div className='container-xl px-4'>
        <div className='row mt-3'>
            <div className='col-xl-8' style={{ margin: "auto" }}>
                <div className='card mb-4'>
                    <div className='card-header'>Trip Details</div>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label className='small mb-1' htmlFor='inputSourceCity'>
                                    Select Source City
                                </label>
                                <input
                                    required={true}
                                    name='sourceCity'
                                    className='form-control'
                                    id='inputSourceCity'
                                    type='text'
                                    placeholder="Enter Source City"
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='small mb-1' htmlFor='inputDestinationCity'>
                                    Select Destination City
                                </label>
                                <input 
                                    required={true}
                                    name='destinationCity'
                                    className='form-control'
                                    id='inputDestinationCity'
                                    type='text'
                                    placeholder="Enter Destination City"
                                />
                            </div>
                            <div className='row gx-3 mt-3 mb-3'>
                                <label className='small mb-1' htmlFor='inputStartTime'>
                                    Start time
                                </label>
                                <input
                                    required={true}
                                    name='startTime'
                                    className='form-control'
                                    id='inputStartTime'
                                    type='time'
                                />
                            </div>
                            <div className='d-grid gap-2 mt-5'>
                                <button
                                    className='btn btn-primary'
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {submitted && (
                       <div className='CabList'> 
                       <h4>List of Available Cabs:</h4>
                       <table className="CabTable"> 
                         <thead className="CabTableHead"> 
                           <tr>
                             <th  className="CabTableHeadCell" >Name</th> 
                             <th className="CabTableHeadCell" >Price Per Minute</th> 
                             <th className="CabTableHeadCell" >Availability</th> 
                           </tr>
                         </thead>
                         <tbody className="CabTableBody"> 
                           {cabData.map((cab, index) => (
                             <tr key={index} className="CabTableRow"> 
                               <td className="CabTableCell">{cab.name}</td> 
                               <td className="CabTableCell">{cab.price}</td> 
                               <td className="CabTableCell">{cab.availability}</td> 
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                )}
                {
                    getRoute.forEach(element => {
                        return(
                            <>
                            <div>{element}</div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
);}

export default AddCity;
