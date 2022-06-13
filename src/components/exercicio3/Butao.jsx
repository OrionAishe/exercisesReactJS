import styles from "./butao.module.scss";

const Butao = (props) => {
    return <button className={styles.Butao} onClick = {props.OnClickHandler}>
        {props.texto}
    </button>
}

export default Butao;