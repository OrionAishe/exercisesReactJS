const Item = (props) => {
    return <props.component className=" list-disc list-item text-black underline">
        {props.content}
    </props.component>

}

export default Item;