import Form from "./Form"
import Items from "./Items"
function SectionCard(props) {
    // let float;
    // if (props.float === "right") {
    //     float = { position: "relative", right: 0 };
    // }
    if (props.form !== "true") {
        return (
            <>
                <div className={props.float === "right" ? "section-card section-card-right" : "section-card"} style={{ backgroundColor: props.backgroundColor, color: props.color }}>

                    <h2>{props.title}</h2>
                    <Items title="Website Package" description="A simple website" />
                    <Items title="Web App Package" description="A web app with required functionality" />
                    <Items title="Mobile App Package" description="A mobile app with required functionality" />



                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={props.float === "right" ? "section-card section-card-right" : "section-card"} style={{ backgroundColor: props.backgroundColor, color: props.color }}>

                    <h2>{props.title}</h2>
                    <Form />


                </div>
            </>
        )
    }

}

export default SectionCard
