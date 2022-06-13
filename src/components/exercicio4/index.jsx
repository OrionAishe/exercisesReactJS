import React from "react";
import Butao from "./Butao";
import Label from "./Label";
import { useState } from "react";

function Exercicio4() {
	const [Texto, setActive] = useState(0);
	const OnClickHandler = (e) => {
		setActive(e.detail);
	}

	return <div className=" flex justify-center items-center flex-col">
		<h1 className='title'>Exercicio4</h1>
		<Label texto = {`button has been clicked ${Texto} times`} />
		<Butao Click = {OnClickHandler} />
	</div>
}

export default Exercicio4;
