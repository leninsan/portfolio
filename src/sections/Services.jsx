import { Button } from '../components/Button';
import styles from './Services.module.css'
import { Card } from '../components/Card';
import { AiOutlineUser } from 'react-icons/ai'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { BsBell } from 'react-icons/bs'
export function Services(){
    return(
        <div className= {styles.service}>
            <div className={styles.title}>
                <h2>Our Services</h2>
            </div>
            <div className={styles.box}>
                <Card icon={<HiBars3BottomLeft/>} title={"Web Development"} frontEnd={"FrontEnd:"} p2={"Maquetado de pagina web con tecnicas de flexbox y grid para un mejor responsive."} p3={"Bootsrap"} p4={"Tailwind"} p5={"JavaScript"} p6={"React.js"}  backEnd={"BackEnd:"} p7={"Node.js"} p8={"Desarrollo de API REST"} p9={"SQL"}/>

                <Card icon={<AiOutlineUser/>} title={"Software Development"} p={""}/>

                <Card icon={<BsBell/>} title={"Ros Development"} p={"every website should be built with two primary goals: firstly, it needs to works acroos all devices, secondly, it needs be fast as possible."}/>
            </div>

        </div>
    );
}