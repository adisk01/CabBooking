import React, { useState } from "react";
import axios from "axios";
import './form.css';

// const getCabData = () => [
//   { name: 'OLA', price: '10', availability: 'Yes' },
//   { name: 'UBER', price : '11', availability: 'Yes' },
//   { name: 'RAPIDO', price : '12', availability: 'Yes' },
//   { name: 'LYFT', price : '13', availability: 'Yes' },
//   { name: 'BOLT', price : '14', availability: 'Yes' }
// ];

const getRoute = [
    "Bombay",
    "Delhi",
    "Mumbai"
];

const AddCity = () => {
    // Created Variables
    const [mail, setMail] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [time, setTime] = useState("1970-01-01T00:00:00.000Z")


    const [cabData, setCabData] = useState([])

    const [submitted, setSubmitted] = useState(false);

    const handleMailChange = (e) => {
        // e.preventDefault();
        setMail(e.target.value);
    }
    const handleSourceChange = (e) => {
        // e.preventDefault();
        setSource(e.target.value);
    }
    const handleDestinationChange = (e) => {
        // e.preventDefault();
        setDestination(e.target.value);
    }
    const handleTimeChange = (e) => {
        // e.preventDefault();
        setTime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        async function fetchData() {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    "time": time,
                },
            };
            const res = await axios.get(
                "http://localhost:8000/api/cabs",
                config
            );
            console.log(res.data);
            setCabData(res.data);
        }
        fetchData();
        setSubmitted(true);
    }
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
                                        Provide Email address
                                    </label>
                                    <input
                                        required={true}
                                        name='sourceCity'
                                        className='form-control'
                                        id='inputSourceCity'
                                        type='text'
                                        value={mail}
                                        onChange={handleMailChange}
                                        placeholder="Enter Email address"
                                    />
                                </div>
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
                                        value={source}
                                        onChange={handleSourceChange}
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
                                        value={destination}
                                        onChange={handleDestinationChange}
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
                                        value={time}
                                        onChange={handleTimeChange}
                                        id='inputStartTime'
                                        type='datetime-local'
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
                                        <th className="CabTableHeadCell" >Name</th>
                                        <th className="CabTableHeadCell" >Price Per Minute</th>
                                        <th className="CabTableHeadCell" >Availability</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                          {cabData.map((cab) => (
                                            <tr key={cab.id}>
                                                <td>{cab.name}</td>
                                                <td>{cab.price}</td>
                                                <td>{cab.id}</td>
                                            </tr>
                                        ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    )}
                    {
                        getRoute.forEach(element => {
                            return (
                                <>
                                    <div>{element}</div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default AddCity;
