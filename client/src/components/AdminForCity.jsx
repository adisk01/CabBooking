import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button ,Table} from 'react-bootstrap';
import axios from "axios";
import {Link} from 'react-router-dom'
// import CityData from "./CityData";
import CreateEntry from "../Modals/ModalForCity";
const Citydata = () =>{
    const [cityData, setCityData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const res = await axios.get(
                "https://cab-backend.onrender.com/api/paths",
                config
            );
            console.log(res.data);
            setCityData(res.data);
        }
        fetchData();
    }, [])

        return (
            <>
                <div style={{margin:"10rem"}}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Source City
                                </th>
                                <th>
                                    Destination City
                                </th>
                                <th>
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cityData && cityData.length > 0
                                ?
                                cityData.map((item)=>{
                                    return (
                                        <tr>
                                            <td>
                                                {item.v1}
                                            </td>
                                            <td>
                                                {item.v2}
                                            </td>
                                            <td>
                                                {item.t1}
                                            </td>
                                    
                                        </tr>
                                    )
                                })
                                :
                                "No Data Available"
                            }
                        </tbody>
                    </Table>
                    <br>
                    </br>
                    
                    {/* <CreateEntry addEntry={addEntry} /> */}

                   
                    
                </div>
            </>
        )
}
export default Citydata;