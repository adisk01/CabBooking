import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button ,Table} from 'react-bootstrap';
import CabData from "./CabData";
import EditEntry from "../Modals/ModalForCabs";
const cabdata = () =>{

    const handleedit = (price) => {
        localStorage.setItem('Price' , price);
    }
    return (
        
        <>
            <div style={{margin:"10rem"}}>
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
                            CabData && CabData.length > 0
                            ?
                            CabData.map((item)=>{
                                return (
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Endtime}
                                        </td>
                                        <td>
                                            {item.Price}
                                        </td>
                                        <td>
                                        <Button onClick={()=>handleedit(item.Price)}
                                        >Edit</Button>

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
export default cabdata;