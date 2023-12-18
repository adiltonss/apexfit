import { useState } from "react"
import styles from "./Navbar.module.scss"

//import './Navbar.css'
export default function Navbar() {
    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                        <a href="#"></a>
                </div>
                <div className={styles.menuIcon} onClick={toggleNavItems}>
                    Menu
                </div>
                <div className={`${styles.navElements}  ${showNav ? styles.active : ''}`}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
