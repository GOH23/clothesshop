import { Box, CardMedia, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tovars } from "../Components/items";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export function AboutUs() {
    return (<Container className="mt-5" style={{ minHeight: '100vh' }}>
        <Typography className="text-center" variant="h2">О нас</Typography>
        <Typography className="text-center" variant="h5">
            Добро пожаловать в наш уникальный магазин модной одежды, где стиль встречает комфорт, а качество становится стандартом. Мы создали это пространство для тех, кто ценит индивидуальность, высокое качество и последние тренды моды.
        </Typography>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}

            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {Tovars.map((el) => {
                return (<SwiperSlide id="swiper-slide">
                    <Box className="UnitCard" sx={{ position: 'relative', cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            sx={{ objectFit: 'cover', borderRadius: '10px' }}
                            image={el.image}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                color: 'white',
                                padding: '0px',
                            }}
                        >
                            <Typography sx={{ textAlign: 'center', fontWeight: 'bold', margin: '10px' }} variant="body1">{el.title}</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>)
            })}
        </Swiper>
        <Typography className="text-center" variant="h2">Наша Миссия</Typography>
        <Typography className="text-center" variant="h5">
        В основе нашей миссии лежит стремление подчеркнуть вашу уникальность через стиль и комфорт. Мы убеждены, что одежда не только отражает ваш внешний вид, но и подчеркивает вашу личность. Мы предлагаем коллекции, которые вдохновляют к выражению себя, создавая стильные и неповторимые образы.
        </Typography>
    </Container>)
}