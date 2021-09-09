function Section_Card(props) {
    // let float;
    // if (props.float === "right") {
    //     float = { position: "relative", right: 0 };
    // }
    return (
        <>
            <div className={props.float === "right" ? "section-card section-card-right" : "section-card"} style={{ backgroundColor: props.backgroundColor, color: props.color }}>
                <h2>{props.title}</h2>
                <p>We are a company that provide you with services of web applications and websites.We are a company that provide you with services of web applications and websites.We are a company that provide you with services of web applications and websites.We are a company that provide you with services of web applications and websites.We are a company that provide you with services of web applications and websites.</p>


            </div>
        </>
    )
}

export default Section_Card
