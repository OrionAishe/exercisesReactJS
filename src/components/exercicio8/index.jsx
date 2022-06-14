import Card from "./Card";
import JokeJS from "./jokes.json";

function Exercicio8() {
	const Jokes = JokeJS;

	return <div className="flex flex-col items-center justify-center">
		<h1 className='title'>Exercicio8</h1>
		<div className="flex justify-center items-center h-screen">
		{Jokes.map((Joke) => (
			<Card 
			key = {Joke.id}
			setup = {Joke.setup}
			punchline = {Joke.punchline} />
		))
		}
		</div>
	</div>
}

export default Exercicio8
