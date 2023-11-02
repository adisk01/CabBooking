import React, { useState } from "react";
import axios from "axios";
import './form.css';
import Booking from "./Booking";

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
    const [time, setTime] = useState("1970-01-01T00:00:00")
    const [minTime, setminTime] = useState(0)
    const [minPath, setminPath] = useState("")
    const [cabData, setCabData] = useState([])
    // const [booking]zz
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
            // console.log(res.data);
            setCabData(res.data);
        }
        fetchData();
        async function fetchPath() {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "v1": source,
                    "v2": destination,
                }
            }
            const res = await axios.get(
                "http://localhost:8000/api/paths/shortest_path/",
                config
            );
            //console.log(res.data);
            setminTime(res.data.time);
            setminPath(res.data.path)
        }
        fetchPath();
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
                                    {/* <select
                                        required={true}
                                        name='sourceCity'
                                        className='form-control'
                                        id='inputSourceCity'
                                        type='text'
                                        value={source}
                                        onChange={handleSourceChange}
                                        placeholder="Enter Source City"
                                    >
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                        <option>F</option>
                                    </select> */}
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
                                    {/* <select
                                        required={true}
                                        name='destinationCity'
                                        className='form-control'
                                        id='inputDestinationCity'
                                        type='text'
                                        value={destination}
                                        onChange={handleDestinationChange}
                                        placeholder="Enter Destination City"
                                    >
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                        <option>F</option>
                                    </select> */}
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
                                        <th className="CabTableHeadCell" >Book</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {cabData.map((cab) => (

                                        <tr key={cab._id}>
                                            <Booking cab={cab} minTime={minTime} time={time} path={minPath} mailto={mail} />

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
