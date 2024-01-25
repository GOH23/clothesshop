import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";

export function Footer(){
    return(<Container className="mt-5 text-center" fluid style={{backgroundColor: 'rgb(248,249,250)',height: '30px'}}>
        <Typography>©️ {new Date().getFullYear().toString()} Магазин Одежды</Typography>
    </Container>)
}