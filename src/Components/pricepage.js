import { Container, Table } from "react-bootstrap";
import { price } from "./products/proces";
export function Pricelist() {
    return (<Container>
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена(в руб)</th>
                </tr>
            </thead>
            <tbody>
                {price.map((el)=>{
                    return(<tr>
                        <td>{el.title}</td>
                        <td>{el.price} руб</td>
                    </tr>)
                })}

            </tbody>
        </Table>
    </Container>)
}