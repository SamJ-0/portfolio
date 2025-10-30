import Button from "../../Components/Button"
import PageTitle from "../../Components/PageTitle"
import "./Contact.css"

function Contact() {
    return(
        <div className="contactContainer">
            <section className="pageHeader">
                <PageTitle>Con<br/>tact</PageTitle>
                <div className="horizontalLine"></div>
            </section>
            <div className="contactDetailsPanel">
                 <div className="icons">
                            <img className="github" src="/github.svg" alt="Github logo" />
                            <img className="linkedIn" src="/InBug-White.png" alt="LinkedIn 'In' logo" />
                    </div>
                <div className="email">
                    <p className="emailLabel">Email:</p>
                    <p className="emailAddress">ExampleEmail@outlook.com</p>
                </div>
                <Button buttonStyle={"contactBtn"}>View CV</Button>
            </div>
        </div>
    )
}

export default Contact