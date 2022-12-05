import styles from "./AboutMe.module.css"
import { Button } from "../components/Button"

export function AboutMe(){
    return(
        <section className = {styles.about}>
            <div className = {styles.main}>
                {/* <img src = { }/> */}
                <div className = {styles.aboutText}>
                    <h2>about me</h2>
                    <h5>Mechatronic Engineer & Developer</h5>
                    <br/>
                    
                    <span>English</span>
                    <br/>
                    <br/>
                    <p>As engineer mechatronic, I be able for develop solutions for task in into of field such as programming or 
                        system embedded and integrate with construction of mechanism through device electromecanic, as 
                        programming as the computer assist design and eletronics are part of my profile professional. Due to 
                        the previous, for develop that kind of solutions in the programming field i had to use languaje such as 
                        python, javaScript, Matlab, java, html, Css, and libraries like Bootstrap, React, Tkinter etc. In CAD and 
                        robotic field i have a great experience in software and hardware such as solidworks, AutoCad, ROS, 
                        atmelstudio, arduino, Eagle etc. And to industrial level implementing control system with PLC.</p>
                    <p> I can present myself as a resilient person, able to improve day by day learning new things, have good 
                        relationship both at work and personal level, I like to teach what I know, and get together with people 
                        who can bring me knowledge both in the technological field and in another field.</p>
                    <p>In recent years I have been expanding my knowledge in software and web development, I have 
                        managed to create web pages with a medium complexity, taking courses and self-taught with real 
                        exercises, waiting for the opportunity to put it at the service in the workplace.</p>
                            
                    <br/>
                    <br/>
                    <span>Spanish</span>
                    <br/>
                    <br/>
                    <p>Como ingeniero mecatrónico, soy capaz de desarrollar soluciones para tareas en el campo de la 
                        programación o el sistema embebido e integrado con la construcción de mecanismos a través de 
                        dispositivos electromecánicos, tanto la programación como el diseño asistido por ordenador y la 
                        electrónica son parte de mi perfil profesional. Debido a lo anterior, para desarrollar este tipo de 
                        soluciones en el campo de la programación he tenido que utilizar lenguajes como python , javaScript, 
                        Matlab, java, html, Css, y librerías como Bootstrap, React, Tkinter etc. En el campo del CAD y la robótica 
                        tengo una gran experiencia en software y hardware como solidworks, AutoCad, ROS, atmelstudio, 
                        arduino, Eagle etc. Y a nivel industrial implementando sistemas de control con PLC.</p>
                    <p>Me puedo presentar como una persona resiliente, capaz de mejorar día a día aprendiendo cosas nuevas, 
                        tener buena relación tanto a nivel laboral como personal, me gusta enseñar lo que sé, y juntarme con 
                        gente que me pueda aportar conocimientos tanto en el campo tecnológico como en otro campo.
                        En los últimos año he ido ampliando mis conocimientos en el desarrollo de software y web, he 
                        conseguido crear páginas web con una complejidad media, realizando cursos y de forma autodidacta
                        con ejercicios reales, esperando la oportunidad de ponerlo al servicio en el ámbito laboral.
                    </p>
                    <Button tag = {"Let's Talk"}/>
                </div>
            </div>
        </section>
    )

}