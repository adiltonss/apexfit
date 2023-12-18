import PrimaryBtn from "../ui/PrimaryBtn/PrimaryBtn";
import SecondaryBtn from "../ui/secondaryBtn/SecondaryBtn";
import styles from "./Header.module.scss";

export default function Header(){
    return(
        <header className={styles.cont}>
            <div className={styles.imgArea}>

            </div>
            <div className={styles.txtArea}>
                <h1>o cuidado com a sua saúde começa agora</h1>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus accusantium reprehenderit, doloremque.</h4>
                <div className={styles.buttonsContainer}>
                    <PrimaryBtn>Começar</PrimaryBtn>
                    <SecondaryBtn>Planos</SecondaryBtn>
                </div>
            </div>
        </header>
    )
}