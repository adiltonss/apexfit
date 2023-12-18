import { FaArrowRight } from "react-icons/fa6";
import styles from "./Train.module.scss"

export default function Train(){
    return(
        <section className={styles.cont}>
            <div className={styles.title}>
                <h2>Venha conhecer</h2>
            </div>
            <div className={styles.instructions}>
                <div className={`${styles.card} ${styles.treadmill}`}>
                    <h3>Treadmill</h3>
                    <a href="#">Saiba mais</a>
                </div>
                <div className={`${styles.card} ${styles.muscle}`}>
                    <h3>Treadmill</h3>
                    <a href="#">Saiba mais</a>
                </div>
                <div className={`${styles.card} ${styles.mirror}`}>
                    <h3>Treadmill</h3>
                    <a href="#">Saiba mais</a>
                </div>
            </div>
        </section>
    )
}