const Butao = (props) => {
    return <button className=" bg-red-600 shadow-red-900" onClick = {props.Click}>
        {props.content}
    </button>
}

export default Butao;