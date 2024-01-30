import { useContext, useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Dropdown, Modal, Row, Toast, ToastContainer } from "react-bootstrap";
import { Autocomplete, Box, Input, Paper, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FcLike } from 'react-icons/fc'
import { AiFillShopping, AiFillSetting } from 'react-icons/ai'
import emailjs from "@emailjs/browser";
import { LoadingContext } from "../loadingContext";
import axios from 'axios'
import { LoadingScreen } from "./static/LoadingScreen";
import Catalog_Card from "./cards/_card";
export function CatalogPage() {
    const { SetLoading, Loading } = useContext(LoadingContext)
    const [FilteredOrders, SetOrders] = useState()
    const [SelectedBrn, SetSelected] = useState('СБРОСИТЬ ФИЛЬТРЫ')
    const [showModal, SetshowModal] = useState(false)
    const [showModal2, SetshowModal2] = useState(false)
    const [FinalOrders, Set] = useState([])
    const [Tovars, SetTovars] = useState([])
    const [Scales,SetScales] = useState([])
    const [show, setShow] = useState({
        title: '',
        show: false
    });
    const [UserData, SetUserData] = useState({
        name: '',
        phone: '',
        email: '',
        orders: '',
        activeStep: 0
    })
    
    useEffect(() => {
        Promise.all([axios.get("https://ill-rose-penguin-belt.cyclic.app/products"),axios.get("https://ill-rose-penguin-belt.cyclic.app/scales")])
        .then((allResults) => {
            SetOrders(allResults[0].data)
            SetTovars(allResults[0].data)
            SetScales(allResults[1].data)
            SetLoading(false)
        })
    }, [])
    const SelectTovar = (el) => {
        setShow({ show: true })
        try {
            const ShopCart = JSON.parse(localStorage.getItem('cartItems')) || [];
            ShopCart.push(el)
            localStorage.setItem('cartItems', JSON.stringify(ShopCart))

        } catch {
            const NewCart = []
            NewCart.push(el)
            localStorage.setItem('cartItems', JSON.stringify(NewCart))
        }
    }
    const FilterOrders = (selectedfilter) => {
        if (selectedfilter == 'Сбросить фильтры') {
            SetSelected(selectedfilter)
            return (SetOrders(Tovars))
        }
        SetSelected(selectedfilter)
        SetOrders(Tovars.filter((el) => {
            return (el.Type.Name == selectedfilter);
        }))

    }
    function OpenCart() {
        SetshowModal(true)
        Set(JSON.parse(localStorage.getItem('cartItems')) || [])
    }
    const flatProps = {
        options: Tovars.map((option) => option.Name),
    };
    if (Loading) return (<LoadingScreen />)
    return (<main><Container>

        <Row>
            <Paper sx={{ display: 'flex', padding: '20px', marginTop: '40px' }}>
                <Autocomplete
                    disablePortal
                    onChange={(event, newValue) => {
                        if (newValue == null) {
                            SetSelected('Сбросить фильтры')
                            return (SetOrders(Tovars))
                        } else {
                            SetOrders(Tovars.filter((el) => {
                                SetSelected('Сбросить фильтры')
                                return (el.Name == newValue);
                            }));
                        }

                    }}
                    id="combo-box-demo"
                    sx={{ flexBasis: '100%', marginRight: '10px' }}
                    {...flatProps}
                    renderInput={(params) => <TextField {...params} label="Поиск" />}
                />
                <Dropdown className="dropdown_search">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Фильтры
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { FilterOrders('одежда для мужчин') }}>одежда для мужчин {SelectedBrn == 'одежда для мужчин' && <FcLike />}</Dropdown.Item>
                        <Dropdown.Item onClick={() => { FilterOrders('одежда для женщин') }}>одежда для женщин {SelectedBrn == 'одежда для женщин' && <FcLike />}</Dropdown.Item> 
                        <Dropdown.Item onClick={() => { FilterOrders('Сбросить фильтры') }}>Сбросить фильтры {SelectedBrn == 'Сбросить фильтры' && <FcLike />}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>



            </Paper>
        </Row>
        <Row style={{ marginTop: '100px' }}>
            {FilteredOrders.map((el, ind) => {
                return (<Col style={{ margin: '10px', textAlign: 'center', }} key={ind}>
                   <Catalog_Card el={el} SelectTovar={SelectTovar} Scales={Scales}/>
                </Col>)
            })}
        </Row>
        <div className="korzinecont">
            <Button style={{ fontSize: '30px' }} onClick={() => OpenCart()}><AiFillShopping /></Button>
        </div>
        <ToastContainer position="bottom-start" className="p-3" style={{ position: 'fixed' }}>
            <Toast onClose={() => setShow({ show: false })} show={show.show} delay={3000} autohide>
                <Toast.Header >

                    <img src="https://image.pngaaa.com/838/30838-middle.png" style={{ height: '50px', width: '50px' }} className="rounded me-2" alt="" />
                    <strong className="me-auto">Магазин одежды</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body style={{ color: 'green', fontWeight: 'bold' }}>Заказ добавлен в корзину { }</Toast.Body>
            </Toast>
        </ToastContainer>
        <Modal centered show={showModal} animation={true} backdrop='static' onHide={() => SetshowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Корзина</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Typography sx={{ textAlign: 'center' }}>Ваш заказ</Typography>
                <div className="cardbox">
                    {FinalOrders.map((el) => {
                        return (<div className="cardcard">
                            <img src={"https://ill-rose-penguin-belt.cyclic.app/images/" + el.Image} />
                            <Typography>{el.Name}</Typography>
                        </div>)
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                {FinalOrders.length != 0 ? <Button style={{ width: '100%' }} onClick={() => { SetshowModal(false); SetshowModal2(true) }}>Заказать</Button> : null}

            </Modal.Footer>
        </Modal>
        <Modal centered show={showModal2} animation={true} onHide={() => { SetshowModal2(false); SetshowModal(true); SetUserData({ activeStep: 0 }) }}>
            <Modal.Header closeButton>
                <Modal.Title>Оформите заказ в пару действий</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={UserData.activeStep}>

                        <Step >
                            <StepLabel>Напишите ваше имя</StepLabel>
                        </Step>

                        <Step >
                            <StepLabel>Напишите ваш телефон</StepLabel>
                        </Step>

                        <Step >
                            <StepLabel>Напишите ваш email</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={{ marginBottom: '10px' }}>
                        {UserData.activeStep == 0 ? <Input placeholder="Ваше имя" onChange={(el) => { SetUserData({ ...UserData, name: el.target.value }) }} /> : null}
                        {UserData.activeStep == 1 ? <Input placeholder="Ваш телефон" onChange={(el) => { SetUserData({ ...UserData, phone: el.target.value }) }} /> : null}
                        {UserData.activeStep == 2 ? <Input placeholder="Ваше email" onChange={(el) => { SetUserData({ ...UserData, email: el.target.value }) }} /> : null}
                        {UserData.activeStep == 3 ? <Typography>Успешно. Нажмите кнопку для заказа.</Typography> : null}
                    </div>
                    {UserData.activeStep == 3 ? <Button onClick={() => {
                        const NameOrd = []
                        FinalOrders.map((el) => {
                            return NameOrd.push(el.title)
                        })
                        emailjs.send("service_5qvzmto", "template_7xkdc1m", {
                            name: UserData.name,
                            phone: UserData.phone,
                            email: UserData.email,
                            order: NameOrd.join(', \n')
                        }, '3fvehWSwZyOfwK9MX');
                        SetUserData({ activeStep: 0 });
                        localStorage.clear();
                        SetshowModal2(false);
                        SetshowModal(false);
                        Set([])
                    }}>Заказать</Button> : <Button onClick={() => {
                        try {
                            if (UserData.name.length != 0 && UserData.activeStep == 0) {
                                SetUserData({ ...UserData, activeStep: UserData.activeStep + 1 })
                                return
                            }
                            else if (UserData.phone.length != 0 && UserData.activeStep == 1) {
                                SetUserData({ ...UserData, activeStep: UserData.activeStep + 1 })
                                return
                            } else if (UserData.email.length != 0 && UserData.activeStep == 2) {
                                SetUserData({ ...UserData, activeStep: UserData.activeStep + 1 })
                                return
                            }
                        } catch {
                            return
                        }

                    }}>Дальше</Button>}

                </Box>
            </Modal.Body>
        </Modal>
    </Container></main>)
}