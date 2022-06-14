const Texto = (props) => {
    return <input className="border border-gray-400 rounded mb-4" type="text" placeholder={props.placeholder} value={props.value} onChange = {props.ChangeHandler}/>
}

export default Texto;