import styles from './Card.module.css'
import { Button } from '../components/Button'
export function Card({icon, title, frontEnd,p2,p3,p4, p5,p6, backEnd,p7,p8,p9}){
    return(
        <div className= {styles.card}>
            {icon}
            <h5>{title}</h5>
            <div className={styles.pra}>
                <br/>
                <h3>{frontEnd}</h3>
                <p>{p2}</p>
                <p>{p3}</p>
                <p>{p4}</p>
                <p>{p5}</p>
                <p>{p6}</p>
                <br/>
                <h3>{backEnd}</h3>
                <p>{p7}</p>
                <p>{p8}</p>
                <p>{p9}</p>
                <Button tag={"Read More."}/>
            </div>
        </div>
    );
}