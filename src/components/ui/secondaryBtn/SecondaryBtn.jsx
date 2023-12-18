import styles from './SecondaryBtn.module.scss'

export default function SecondaryBtn({children}){
    return(
        <>
            <a className={styles.secondaryBtn} href="#">
                {children}
            </a>
        </>
    )
}