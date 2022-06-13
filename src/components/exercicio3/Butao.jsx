import styles from "./butao.module.scss";

const Butao = (props) => {
    return <button className=" w-32 bg-slate-300 border-solid border-black border" onClick = {props.OnClickHandler}>
        {props.texto}
    </button>
}

export default Butao;