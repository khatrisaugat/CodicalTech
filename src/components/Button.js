const Button = (props) => {
    return (
        <>
            <button className="Btn" type={props.type ? props.type : "button"}>
                {props.title}
            </button>
        </>

    )
}

export default Button