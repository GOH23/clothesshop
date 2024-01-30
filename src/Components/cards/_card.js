import { Typography } from "@mui/material"
import { Pagination } from "react-bootstrap"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
export default function Catalog_Card({ SelectTovar, el, Scales }) {
    const [AnimationState, SetAnimationState] = useState(false)
    const [SelectedScale, SetSelectedScale] = useState(0)
    console.log(Scales)
    return (<motion.div onHoverStart={() => SetAnimationState(true)} onHoverEnd={() => SetAnimationState(false)} style={{ position: 'relative', maxWidth: "400px",minWidth: "400px", borderRadius: '10px', border: '3px solid black'}}>
        <img  src={"https://ill-rose-penguin-belt.cyclic.app/images/" + el.Image} alt='' style={{ height: '400px', borderRadius: '10px', width: 'fit-content', maxWidth: "390px" }} />
        <p className="clothes_size">{Scales[SelectedScale].Name}</p>
        {AnimationState ? <AnimatePresence>
            <motion.div onHoverStart={() => SetAnimationState(true)} onHoverEnd={() => SetAnimationState(false)} className="content_box dd"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>{el.Name}</Typography>
                <Typography>{el.Description}</Typography>
                <Typography sx={{ fontWeight: "bold", textAlign: "right", margin: "10px" }}>Цена: {el.Price*Scales[SelectedScale].ScalePrice} руб</Typography>
                <Pagination >
                    {Scales.map((el,ind) => {
                        return (<Pagination.Item key={ind} active={SelectedScale ===ind} onClick={() => {SetSelectedScale(ind) }}>{el.Name}</Pagination.Item>)
                    })}
                </Pagination>
                <motion.button className="btn btn-primary" whileHover={{ scale: 1.1, backgroundColor: "green", color: "white", borderColor: "white" }} onClick={() => SelectTovar(el)}>Добавить к заказу</motion.button>

            </motion.div>
        </AnimatePresence> : null}
    </motion.div>)
}