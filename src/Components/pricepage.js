import { Container, Table } from "react-bootstrap";

import { useContext, useEffect, useState } from "react";
import axios from 'axios' 
import { LoadingContext } from "../loadingContext";
import { LoadingScreen } from "./static/LoadingScreen";
export function Pricelist() {
    const [price,SetPrice] = useState([])
    const {SetLoading,Loading} = useContext(LoadingContext)
    useEffect(()=>{
        axios.get("https://ill-rose-penguin-belt.cyclic.app/price/table").then((res)=>{
            SetPrice(res.data)
        }).finally(()=>SetLoading(false))
    },[])

    return (<Container> 
        {Loading ? <LoadingScreen/> : <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена(в руб)</th>
                </tr>
            </thead>
            <tbody>
                {price.map((el)=>{
                    return(<tr>
                        <td>{el.Name}</td>
                        <td>{el.Price} руб</td>
                    </tr>)
                })}

            </tbody>
        </Table>}
        
    </Container>)
}