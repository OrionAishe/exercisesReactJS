import styles from "./butao.module.scss"

const Butao = () => {
    return <button className={styles.Butao} onClick={() => {alert("YOU CLICKED ME!!!")}}>BUTÃO</button>
}

export default Butao;