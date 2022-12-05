import styles from './Card.module.css'
import { Button } from '../components/Button'
export function Card({icon, title, p}){
    return(
        <div className= {styles.card}>
            {icon}
            <h5>{title}</h5>
            <div className={styles.pra}>
                <p>{p}</p>
                <Button tag={"Read More."}/>
            </div>
        </div>
    );
}