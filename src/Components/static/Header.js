import React from 'react';
import {motion} from 'framer-motion';
import { Container, Nav, NavDropdown,  NavLink,  Navbar } from 'react-bootstrap';
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material'

import { Link } from 'react-router-dom';
function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
export function Header() {
    const anim  ={
        initial: {
            x: 0,
            opacity: 0
        },
        animate:  (custom)=>({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2,duration: 1.5 }
        })
    }
    return (<header>
        <ElevationScroll >
            <AppBar sx={{ minHeight: '64px', backgroundColor: 'white' }}>
                <Navbar bg='light' variant='light' expand="md" style={{ minHeight: '64px' }}>
                    <Container >
                        <Link to='/' className='navbar-brand' style={{fontSize: '25px'}}><img height='50' width='cover' src='https://play-lh.googleusercontent.com/CyVShdZqZyjUJ8CitRgR7gjcKbZ5ES9VrzaTzr8GYOWMKnCkSJTNwJ3TQJa2vC1ZEejp' alt='Не удалось найти картинку'/>Магазин одежды</Link>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav >
                                <NavDropdown title='Наши услуги' style={{fontSize: '20px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/yslugi" style={{fontSize: '18px'}} >Наши продукты</NavDropdown.Item>
                                    <NavDropdown.Item href="/coll" style={{fontSize: '18px'}} >
                                        Справочник
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/pricelist" style={{fontSize: '18px'}} >Прайс-лист</NavDropdown.Item>

                                </NavDropdown>
                                <NavLink style={{fontSize: '20px'}} href="/about">О нас</NavLink>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://burobiz-a.akamaihd.net/uploads/images/131083/large_otkryt-magazin-odezhdy.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div className='mask' >
                <motion.div  className='d-flex justify-content-center align-items-center h-100 ' style={{ backgroundColor: 'rgba(163, 163, 163, 0.6)', padding: '30px', borderRadius: '10px' }}>
                    <div className='text-black'>
                        <motion.h1 className='mb-3' variants={anim} initial="initial" whileInView="animate" custom={1} viewport={{once: true}}>Магазин одежды</motion.h1>
                        <motion.h4 className='mb-3' variants={anim} initial="initial" whileInView="animate" custom={2} viewport={{once: true}}>
                            Предлагаем обувь или другие виды одежды как для мужчин так и для женщин</motion.h4>
                        <Link to='/yslugi' className='btn btn-outline-dark btn-lg' href='d' role='button' variants={anim} initial="initial" whileInView="animate" custom={3} viewport={{once: true}}>
                            Заказать нашу продукцию
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </header >)
}