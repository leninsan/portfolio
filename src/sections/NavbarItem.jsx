import styles from './NavbarItem.module.css'

export function NavbarItem({tag}){
    return <li className = {styles.NavbarItem}><a href="#">{tag}</a></li>
}