import Item from "./Item";

const Lista = (props) => {
    const Array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return <ul className=" list-inside">
        {Array.map((lista) => (
            <Item
                key={lista}
                component = "li"
                content={lista} />
        ))}
    </ul>
}

export default Lista;