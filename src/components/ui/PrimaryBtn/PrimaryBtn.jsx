import styles from "./PrimaryBtn.module.scss"

export default function PrimaryBtn({children}){
    return(
        <>
            <a className={styles.btn_primary} href="#">
                {children}
            </a>
        </>
    )
}