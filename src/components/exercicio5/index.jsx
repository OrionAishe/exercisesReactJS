import Lista from "./Lista";

function Exercicio5() {
	const Array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

	return <div className="flex items-center flex-col">
		<h1 className='title'>Exercicio5</h1>
		<ul className=" list-inside">
		{Array.map((lista) => (
			<Lista 
			key = {lista}
			content = {lista} />
		))
		}
		</ul>
		</div>
}

export default Exercicio5
