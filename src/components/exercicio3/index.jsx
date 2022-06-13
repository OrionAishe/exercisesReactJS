import React from "react";
import Butao from "./Butao";
import styles from "./butao.module.scss";

function Exercicio3() {
	const Array = [{
		texto : "Butão 1",
		key : "Butão 1"
	},
	{
		texto : "Butão 2",
		key : "Butão 2"
	},
	{
		texto : "Butão 3",
		key : "Butão 3"
	}];

	const OnClickHandler = (e) =>{
		alert(`You Clicked in ${e.target.innerHTML}`);
	}

	return <div>
		<h1 className='title'>Exercicio3</h1>
		<div className= {styles.butões}>
		{Array.map((butao) => (
			<Butao 
			OnClickHandler = {OnClickHandler}
			key={butao.key}
			texto = {butao.texto}
			/>
		))}
		</div>
	</div>
}

export default Exercicio3
