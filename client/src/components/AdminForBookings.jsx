import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button ,Table} from 'react-bootstrap';

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
                "http://localhost:8000/api/bookings",
                config
            );
            console.log(res.data);
            setData(res.data);
        }
        fetchData();
    }, [])
    return (
        <>
            <div>AdminForBookings</div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Mail
                        </th>
                        <th>
                            Start Time
                        </th>
                        <th>
                            End Time
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Source
                        </th>
                        <th>
                            Destination
                        </th>
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
        </>
    )
}

export default AdminForBookings