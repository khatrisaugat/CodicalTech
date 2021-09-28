const Button = (props) => {
    return (
        <>
            <button className={"Btn "} type={props.type ? props.type : "button"} onClick={props.handleClick} >
                {props.title}
            </button>
        </>

    )
}

export default Button