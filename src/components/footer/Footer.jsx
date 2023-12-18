import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

import styles from './Footer.module.scss'

export default function Footer(){
    return(
        <footer>

            <div className={styles.sociaMediaIcon}>
                <div className={styles.icons}>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaXTwitter /></a>
                </div>
                <div className={styles.logo}>
                    <a href="#"></a>
                </div>
            </div>
            <div className={styles.infoCont}>
                <p className="location"><span><CiLocationOn /></span> 221B Baker Street, London</p>   
            </div>
        </footer>
    )
}