import styles from "./Button.module.css"
export function Button({tag}){
    return <a className = {styles.NavbarBtnSubscribe} href="#">{tag}</a>
}