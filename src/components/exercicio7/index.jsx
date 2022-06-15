import React, { useState, useRef } from "react";
import Butao from "./Butao";
import Texto from "./Texto";

function Exercicio7() {
	const Name = useRef();
	const lastName = useRef();

	const ClickHandler = () => {
		alert(`Hello, ${Name.current.value} ${lastName.current.value}`)
	}

	return <div className="flex flex-col w-screen items-center">
		<h1 className='title'>Exercicio7</h1>
		<Texto placeholder="First Name" reference={Name}/>
		<Texto placeholder="Last Name" reference={lastName}/>
		<Butao content="GREET ME" Click={ClickHandler} />
	</div>
}

export default Exercicio7