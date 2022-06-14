const Butao = (props) => {
    return <button className=" bg-red-600 border-b-red-900 border-b-4 w-2/12 rounded-md active:border-b-2 active:translate-y-1" onClick = {props.Click} >
        {props.content}
    </button>
}

export default Butao;