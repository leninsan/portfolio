import styles from "./InputEmail.module.css"
import { Button } from '../components/Button'
export function InputEmail(){
    return(
        <div className = {styles.InputEmail}>            
            <form>
                <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                {/* <input type="submit" name="submit" value="Lets Start"/> */}
                <Button tag={"Lets Start"}/>
            </form>
        </div>
    )
}