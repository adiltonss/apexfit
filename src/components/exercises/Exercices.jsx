import { FaHeartPulse } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { TbTreadmill } from "react-icons/tb";
import { GiWeightLiftingUp } from "react-icons/gi";
import styles from './Exercices.module.scss';

const items = [
    {   
        title: "Saúde",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        icon: <FaHeartPulse />,
    },
    {
        title: "Equipamentos",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        icon: <CgGym />,
    },
    {
        title: "Foco",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        icon: <TbTreadmill />,
    },
    {
        title: "Resultados",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        icon: <GiWeightLiftingUp />,
    },
    
]

export default function Exercises(){
    return(
        <section className={styles.cont}>
            <div className={styles.subCont}>
                <div className={styles.row}>
                    <h2>Encontre tudo o que precisa</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo delectus cupiditate amet minus sint nemo assumenda reiciendis voluptates.</p>
                </div>
                <div className={styles.cardsCont}>
                    {
                        items.map(item => (
                            <div className={styles.card}>
                                <div className={styles.icons}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}