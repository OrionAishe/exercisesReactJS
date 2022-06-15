import React, {useRef} from "react";

const Texto = (props) => {
    return <input className="border border-gray-400 rounded mb-4" type="text" placeholder={props.placeholder} value={props.value} ref={props.reference}/>
}

export default Texto;