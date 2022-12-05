import { Button } from "../components/Button";
import { NavbarItem } from "./NavbarItem";
import styles from "./Navbar.module.css"
export function Navbar(){
    return(
        <nav>
            <h2 className = {styles.NavbarLogo}>Portfo<span>lio</span></h2>
            <ul className = {styles.NavbarBtns}>
                <NavbarItem tag={"Home"}/>
                <NavbarItem tag={"About me"}/>
                <NavbarItem tag={"Services"}/>
                <NavbarItem tag={"Skill"}/>
                <NavbarItem tag={"Contact me"}/>
                
            </ul>
            <Button tag={"Subscribe"}/>
        </nav>
    )


}