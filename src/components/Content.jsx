import leninImg from '../assets/imghv.png'
import styles from './Content.module.css'
import { InputEmail } from './InputEmail'

export function Content(){
    return(   
        <div className = {styles.content}>
            <img  className = {styles.leninImg} src = {leninImg} alt='img' />
            <h4>Hello, my name is</h4>
            <h1>Lenin <span>Sanchez</span></h1>
            <h3>I'm a Web Developer</h3>
            <InputEmail/>
        </div>
    )
}