const Card = (props) => {
    return <div className=" border-lime-200 bg-slate-50 rounded border-16 w-full h-1/3 flex flex-col items-center justify-evenly text-center">
        <h1 className="text-3xl font-bold">
            {props.setup}
        </h1>
        <h3>
            {props.punchline}
        </h3>
    </div>
}

export default Card;