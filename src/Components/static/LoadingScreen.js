import { Spinner } from "react-bootstrap";

export function LoadingScreen(){
    return(<div className="loading_box">
        <Spinner animation="border" role="status">

        </Spinner>
    </div>)
}