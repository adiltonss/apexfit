import PrimaryBtn from '../ui/PrimaryBtn/PrimaryBtn'
import styles from './Plans.module.scss'

export default function Plans(){
    return(
        <section className={styles.cont}>
            <h2 className={styles.title}>Confira nossos planos</h2>
            <div className={styles.subCont}>
                <div className={styles.card}>
                    <h2>Basic</h2>
                    <h3>$19, <span>99</span></h3>
                    <div>Mensal</div>
                    <div>
                        <PrimaryBtn>Assinar</PrimaryBtn>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2>Mid</h2>
                    <h3>$39, <span>99</span></h3>
                    <div>Mensal</div>
                    <div>
                        <PrimaryBtn>Assinar</PrimaryBtn>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2>Pro</h2>
                    <h3>$59, <span>99</span></h3>
                    <div>Mensal</div>
                    <div>
                        <PrimaryBtn>Assinar</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    )
}