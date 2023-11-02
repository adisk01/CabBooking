import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Button, Table } from 'react-bootstrap';
// import CabData from "./CabData";
import EditEntry from "../Modals/ModalForCabs";
const CabData = () => {
    const [cabData, setCabData] = useState([]);
  //  const [price , setPrice] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    "time": "1970-01-30T18:30:00.000Z",
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
    }, [])
 
    return (
        <>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Endtime
                            </th>
                            <th>
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cabData && cabData.length > 0
                                ?
                                cabData.map((item, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.end_time}
                                            </td>
                                            <td>
                                                {item.price}
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

        </>
    )
}
export default CabData;