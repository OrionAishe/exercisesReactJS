import Lista from "./Lista";

function Exercicio5() {
	const Array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

	return <div>
		<h1 className='title'>Exercicio5</h1>
		<ul className=" text-center list-inside">
		{Array.map((lista) => (
			<Lista content = {lista} />
		))
		}
		</ul>
		</div>
}

export default Exercicio5
