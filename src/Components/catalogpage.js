import { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Dropdown, Modal, Row, Toast, ToastContainer } from "react-bootstrap";
import { Tovars } from "./items";
import { Autocomplete, Box, Input, Paper, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FcLike } from 'react-icons/fc'
import { AiFillShopping, AiFillSetting } from 'react-icons/ai'
import emailjs from "@emailjs/browser";
export function CatalogPage() {
    const [FilteredOrders, SetOrders] = useState(Tovars)
    const [SelectedBrn, SetSelected] = useState('СБРОСИТЬ ФИЛЬТРЫ')
    const [showModal, SetshowModal] = useState(false)
    const [showModal2, SetshowModal2] = useState(false)
    const [FinalOrders, Set] = useState([])
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
    const anim = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

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
        if (selectedfilter == 'СБРОСИТЬ ФИЛЬТРЫ') {
            SetSelected(selectedfilter)
            return (SetOrders(Tovars))
        }
        SetSelected(selectedfilter)
        SetOrders(Tovars.filter((el) => {
            return (el.type == selectedfilter);
        }))

    }
    function OpenCart() {
        SetshowModal(true)
        Set(JSON.parse(localStorage.getItem('cartItems')) || [])
    }
    const flatProps = {
        options: Tovars.map((option) => option.title),
    };
    return (<Container>
        <Row>
            <Paper sx={{ display: 'flex', padding: '20px', marginTop: '40px' }}>
                <Autocomplete
                    disablePortal
                    onChange={(event,newValue) => {
                        if (newValue == null) {
                            SetSelected('СБРОСИТЬ ФИЛЬТРЫ')
                            return (SetOrders(Tovars))
                        } else{
                            SetOrders(Tovars.filter((el) => {
                                SetSelected('СБРОСИТЬ ФИЛЬТРЫ')
                                return (el.title == newValue);
                            }));
                        }

                    }}
                    id="combo-box-demo"
                    sx={{ flexBasis: '100%', marginRight: '10px' }}
                    {...flatProps}
                    renderInput={(params) => <TextField {...params} label="Поиск" />}
                />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Фильтры
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { FilterOrders('ДЛЯ МУЖЧИНЫ И ЖЕНЩИНЫ') }}>ДЛЯ МУЖЧИНЫ И ЖЕНЩИНЫ {SelectedBrn == 'ДЛЯ МУЖЧИНЫ И ЖЕНЩИНЫ' && <FcLike />}</Dropdown.Item>
                        <Dropdown.Item onClick={() => { FilterOrders('ДЛЯ ЖЕНЩИНЫ') }}>ДЛЯ ЖЕНЩИНЫ {SelectedBrn == 'ДЛЯ ЖЕНЩИНЫ' && <FcLike />}</Dropdown.Item>
                        <Dropdown.Item onClick={() => { FilterOrders('ДЛЯ ДЕТЕЙ') }}>ДЛЯ ДЕТЕЙ {SelectedBrn == 'ДЛЯ ДЕТЕЙ' && <FcLike />}</Dropdown.Item>

                        <Dropdown.Item onClick={() => { FilterOrders('СБРОСИТЬ ФИЛЬТРЫ') }}>СБРОСИТЬ ФИЛЬТРЫ {SelectedBrn == 'СБРОСИТЬ ФИЛЬТРЫ' && <FcLike />}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Paper>
        </Row>
        <Row style={{ marginTop: '100px' }}>
            {FilteredOrders.map((el, ind) => {
                return (<Col style={{ margin: '10px', textAlign: 'center', position: 'relative' }} key={ind}>
                    <motion.img variants={anim} whileHover="animate" src={el.image} alt='' style={{ height: '400px', width: 'fit-content', borderRadius: '10px', border: '3px solid black' }} />
                    <motion.div className="content_box" variants={anim} initial="initial" whileHover="animate" viewport={{ once: true }}>
                        <Typography sx={{ fontWeight: 'bold' }}>{el.title}</Typography>
                        <Typography>{el.desc}</Typography>
                        <Button onClick={() => SelectTovar(el)}>Добавить к заказу</Button>
                    </motion.div>
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
                            <img src={el.image} />
                            <Typography>{el.title}</Typography>
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
    </Container>)
}