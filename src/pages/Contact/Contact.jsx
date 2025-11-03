import Button from "../../components/Button"
import Icons from "../../components/Icons"
import PageTitle from "../../components/PageTitle"
import "./Contact.css"

function Contact() {
    return(
        <div className="contactContainer" id="contactSection">
            <section className="pageHeader">
                <PageTitle>Con<br/>tact</PageTitle>
                <div className="horizontalLine"></div>
            </section>
            <footer className="contactDetailsPanel">
                    <Icons showLinkedIn={true} containerClass={"iconContainer"}/>
                <div className="email">
                    <p className="emailLabel">Email:</p>
                    <p className="emailAddress">ExampleEmail@outlook.com</p>
                </div>
                <Button buttonStyle={"contactBtn"}>View CV</Button>
            </footer>
        </div>
    )
}

export default Contact