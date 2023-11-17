import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from 'react-bootstrap';
import './adminforbooking.css'
const url=""
const AdminForBookings = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const res = await axios.get(
                "https://cab-backend.onrender.com/api/bookings",
                config
            );

            console.log(res.data);

            setData(res.data);

        }

        fetchData();
    }, [])
    return (
        <>
            <div className="container">
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#007bff' }}>Booking History
</div>
            <div className="table-container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="table-header">
                        <th>Mail</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Price</th>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data && data.length > 0
                            ?
                            data.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            {item.mail}
                                        </td>
                                        <td>
                                            {item.start_time}
                                        </td>
                                        <td>
                                            {item.end_time}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.source}
                                        </td>
                                        <td>
                                            {item.destination}
                                        </td>

                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                    }
                </tbody>
            </Table>
            </div>
            </div>
        </>
    )
}

export default AdminForBookings