import React, { useState } from "react";
import Butao from "./Butao";
import Texto from "./Texto";

function Exercicio7() {
	const [Name, setName] = useState(null);
	const [lastName, setLastname] = useState(null)

	const ChangeNameHandler = (e) => {
		setName(e.target.value);
	}

	const ChangeLastNameHandler = (e) => {
		setLastname(e.target.value);
	}

	const ClickHandler = () => {
		alert(`Hello, ${Name} ${lastName}`)
	}

	return <div className="flex flex-col w-screen items-center">
		<h1 className='title'>Exercicio7</h1>
		<Texto placeholder="First Name" ChangeHandler={ChangeNameHandler} />
		<Texto placeholder="Last Name" ChangeHandler={ChangeLastNameHandler} />
		<Butao content="GREET ME" Click={ClickHandler} />
	</div>
}

export default Exercicio7