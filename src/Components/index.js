import { Box, Divider, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import TypeWriterEffect from 'react-typewriter-effect';
function Counter({ from, to }) {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        ref.current.textContent = value.toFixed(1);
      }
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} style={{ marginBottom: '0', color: 'green', fontSize: '70px' }} />;
}
export function MainPage() {
  const anim = {
    initial: {
      x: 0,
      opacity: 0
    },
    animate: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1.5 }
    })
  }
  return (<Container>
    <Divider sx={{ borderBottomWidth: '10px', marginTop: '10px', borderRadius: '10px' }} />
    <motion.h2 variants={anim} initial='initial' animate='animate' custom={4} viewport={{ once: true }} style={{ textAlign: 'center' }}>О нас</motion.h2>
    <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px', flexWrap: 'wrap', flexDirection: 'row' }}>
      <motion.div variants={anim} initial='initial' animate='animate' custom={4} viewport={{ once: true }} style={{ fontSize: '30px', flexBasis: '50%', textAlign: 'center', alignItems: 'center' }}>
        Мы на рынке<br /><Counter from={0} to={25} /> лет
      </motion.div>
      <motion.div variants={anim} initial='initial' animate='animate' className="text_center_media" custom={4} viewport={{ once: true }} style={{ flexBasis: '50%' }}>
        <TypeWriterEffect
          
          textStyle={{ fontFamily: 'Red Hat Display', fontSize: '30px' }}
          startDelay={10}
          cursorColor="black"
          multiText={[
            'Добро пожаловать в наш уникальный магазин модной одежды, где стиль встречает комфорт, а качество становится стандартом. Мы создали это пространство для тех, кто ценит индивидуальность, высокое качество и последние тренды моды.',
            'В основе нашей миссии лежит стремление подчеркнуть вашу уникальность через стиль и комфорт. Мы убеждены, что одежда не только отражает ваш внешний вид, но и подчеркивает вашу личность. Мы предлагаем коллекции, которые вдохновляют к выражению себя, создавая стильные и неповторимые образы.',
            'В основе нашей миссии лежит стремление подчеркнуть вашу уникальность через стиль и комфорт. Мы убеждены, что одежда не только отражает ваш внешний вид, но и подчеркивает вашу личность. Мы предлагаем коллекции, которые вдохновляют к выражению себя, создавая стильные и неповторимые образы.',
            'Спасибо, что выбрали наш магазин. Мы гордимся тем, что помогаем вам выражать свой стиль и чувствовать уверенность в каждом образе. Присоединяйтесь к нам в путешествии по миру моды, где ваш стиль — это ваш уникальный след.'

          ]}
          typeSpeed={50}

        />

      </motion.div>
    </Box>
    <Box id='box' sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', flexWrap: 'wrap', flexDirection: 'row', textAlign: 'center' }}>
      <motion.div className="carda money" variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <img src="https://sun6-20.userapi.com/s/v1/ig2/L-RmjNfkY-EEryBbXqlY-oDpCkmZ80A_jmmo44e20otMA7UZUfywh3fBLXR47p9dSyFMQO1gxbYIdFKie0xNepWv.jpg?size=892x900&quality=96&crop=2,0,892,900&ava=1" />
        <Typography sx={{ fontSize: '28px', marginTop: '17px' }}>Малая стоимость</Typography>
        <Typography sx={{ fontSize: '20px' }}>Наши продукты имеют самую низкую стоимость в городе</Typography>
      </motion.div>
      <motion.div className="carda money" variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <img src="https://w7.pngwing.com/pngs/79/1020/png-transparent-motor-vehicle-speedometers-royal-bikes-design-emblem-logo-dribbble.png" />
        <Typography sx={{ fontSize: '28px', marginTop: '17px' }}>Качество на Первом Месте</Typography>
        <Typography sx={{ fontSize: '20px' }}>Все наши товары проходят строгий отбор, чтобы гарантировать высший стандарт качества. Мы сотрудничаем с лучшими производителями, чтобы предложить продукцию, отличающуюся долговечностью и стильным дизайном.</Typography>
      </motion.div>
      <motion.div className="carda money" variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <img src="https://gazon-msk.ru/wp-content/uploads/2021/06/63bd3bdd-6959-4d52-a7b7-bcea8c480c53-167981.png" />
        <Typography sx={{ fontSize: '28px', marginTop: '17px' }}>Тренды и Инновации</Typography>
        <Typography sx={{ fontSize: '20px' }}>Мы всегда в курсе последних модных тенденций, предлагая самые актуальные коллекции.</Typography>
      </motion.div>
      <motion.div className="carda money" variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <img src="https://w7.pngwing.com/pngs/79/1020/png-transparent-motor-vehicle-speedometers-royal-bikes-design-emblem-logo-dribbble.png" />
        <Typography sx={{ fontSize: '28px', marginTop: '17px' }}>Персональный Подход</Typography>
        <Typography sx={{ fontSize: '20px' }}>Мы ценим каждого клиента и стремимся предоставить индивидуальный сервис. Наши сотрудники готовы помочь подобрать идеальные наряды, соответствующие вашему стилю и предпочтениям.</Typography>
      </motion.div>
    </Box>

    <Divider sx={{ borderBottomWidth: '10px', marginTop: '10px', borderRadius: '10px' }} />
    <Box className="box_" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', flexWrap: 'wrap', flexDirection: 'row', textAlign: 'center' }}>
      <motion.div variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <Typography sx={{ fontSize: '28px' }}><AiFillPhone />Наш телефон</Typography>
        <Typography sx={{ fontSize: '20px' }}>8 (916) 328-79-46 </Typography>
      </motion.div>
      <motion.div variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <Typography sx={{ fontSize: '28px' }}><AiFillPhone />FAX и автоответчик</Typography>
        <Typography sx={{ fontSize: '20px' }}>8 (4964) 25-08-54</Typography>
      </motion.div>
      <motion.div variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <Typography sx={{ fontSize: '28px' }}><AiOutlineMail /> Почтовый адрес</Typography>
        <Typography sx={{ fontSize: '20px' }}>г.Орехово-Зуево
          Московская область</Typography>
      </motion.div>
      <motion.div variants={anim} initial='initial' animate='animate' custom={5} viewport={{ once: true }} >
        <Typography sx={{ fontSize: '28px' }}><AiOutlineMail />E-mail</Typography>
        <Typography sx={{ fontSize: '20px' }}>igor1011@mail.ru</Typography>
      </motion.div>
    </Box>
  </Container>)
}