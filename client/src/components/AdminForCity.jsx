import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button ,Table} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import CityData from "./CityData";
import CreateEntry from "../Modals/ModalForCity";
const Citydata = () =>{
    const [CityData, setCityData] = useState([]);
    const addEntry = (newEntry) => {
    setCityData([...CityData, newEntry]);
  };

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
                                CityData && CityData.length > 0
                                ?
                                CityData.map((item)=>{
                                    return (
                                        <tr>
                                            <td>
                                                {item.Source}
                                            </td>
                                            <td>
                                                {item.Destination}
                                            </td>
                                            <td>
                                                {item.Time}
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
                    
                    <CreateEntry addEntry={addEntry} />

                   
                    
                </div>
            </>
        )
}
export default Citydata;