import { Typography } from "@mui/material"
import { motion } from "framer-motion"
import { Col, Container, Row } from "react-bootstrap"
export function Collectionspage() {
    return (<main style={{ minHeight: '100vh' }}>
        <Container>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Наши партнеры</Typography>
            <Row md={1} lg={1}  className="justify-content-center row-eq-height">
                <Col  md="6" lg="6" className="mt-2 h-100">
                    <motion.div initial={{x: -100,opacity: 0}} whileInView={{x: 0,opacity: 1}} transition={{duration: 1.5,delay: 0.35}} viewport={{once: true}}>
                        <motion.div className="card">
                            <img src='https://logo-download.com/wp-content/data/images/logos/gloria-jeans.png' />
                            <div className="options">
                                <Typography sx={{ fontWeight: 'bold' }}>Gloria Jeans</Typography>
                                <motion.a whileHover={{textDecoration: 'underline',color: 'blue'}}  className="next_pg" href="https://www.gloria-jeans.ru/">перейти</motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col md="6" lg="6" className="mt-2">
                    <motion.div initial={{x: -100,opacity: 0}} whileInView={{x: 0,opacity: 1}} transition={{duration: 1.5,delay: 0.35}} viewport={{once: true}}>
                        <motion.div className="card">
                            <img src='https://avatars.mds.yandex.net/get-altay/9849468/2a0000018bde4b28587c72bfbeba0557e56b/XS' />
                            <div className="options">
                                <Typography sx={{ fontWeight: 'bold' }}>STREET BEAT</Typography>
                                <motion.a whileHover={{textDecoration: 'underline',color: 'blue'}} className="next_pg"  href="https://www.gloria-jeans.ru/">перейти</motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col md="6" lg="6" className="mt-2">
                    <motion.div initial={{x: -100,opacity: 0}} whileInView={{x: 0,opacity: 1}} transition={{duration: 1.5,delay: 0.35}} viewport={{once: true}}>
                        <motion.div className="card">
                            <img src='https://avatars.mds.yandex.net/get-socsnippets/12403076/2a0000018c6fdb539c47a4da036b0bb6dc7b/square_83' />
                            <div className="options">
                                <Typography sx={{ fontWeight: 'bold' }}>SELA</Typography>
                                <motion.a whileHover={{textDecoration: 'underline',color: 'blue'}} className="next_pg"  href="https://www.sela.ru/?utm_source=admitad&utm_campaign=365800&tagtag_uid=960fb6303322c3fa8683ea7afb5b91ec">перейти</motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col md="6" lg="6" className="mt-2">
                    <motion.div initial={{x: -100,opacity: 0}} whileInView={{x: 0,opacity: 1}} transition={{duration: 1.5,delay: 0.35}} viewport={{once: true}}>
                        <motion.div className="card">
                            <img src='https://avatars.mds.yandex.net/get-altay/10456159/2a0000018b3da3d6c8f412ba961aeeb09503/XS' />
                            <div className="options">
                                <Typography sx={{ fontWeight: 'bold' }}>BEBA KIDS</Typography>
                                <motion.a whileHover={{textDecoration: 'underline',color: 'blue'}} className="next_pg"  href="https://www.bebakids.ru/?utm_source=admitad&utm_medium=cpa&utm_campaign=365800&utm_content=marketing&admitad_uid=205da14b754413524bc514d6f4eb7a9b&utm_term=462350">перейти</motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col md="6" lg="6" className="mt-2">
                    <motion.div initial={{x: -100,opacity: 0}} whileInView={{x: 0,opacity: 1}} transition={{duration: 1.5,delay: 0.35}} viewport={{once: true}}>
                        <motion.div className="card">
                            <img src='https://avatars.mds.yandex.net/get-entity_search/1956054/531595909/S122x122Fit_2x' />
                            <div className="options">
                                <Typography sx={{ fontWeight: 'bold' }}>Wildberries</Typography>
                                <motion.a whileHover={{textDecoration: 'underline',color: 'blue'}} className="next_pg"  href="https://www.wildberries.ru">перейти</motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col md="6" lg="6" className="mt-2">
                    <motion.div initial={{x: -100,opacity: 0}} whileInView={{x: 0,opacity: 1}} transition={{duration: 1.5,delay: 0.35}} viewport={{once: true}}>
                        <motion.div className="card">
                            <img src='https://avatars.mds.yandex.net/get-altay/240733/2a0000015eb38c9262fb965bec3ab72460c8/XS' />
                            <div className="options">
                                <Typography sx={{ fontWeight: 'bold' }}>ItalBazar</Typography>
                                <motion.a whileHover={{textDecoration: 'underline',color: 'blue'}} className="next_pg"  href="https://www.italbazar.ru">перейти</motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </Col>
            </Row>
        </Container>

    </main>)
}