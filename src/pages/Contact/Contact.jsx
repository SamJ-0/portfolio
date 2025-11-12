import Icons from "../../components/Icons"
import PageTitle from "../../components/PageTitle"
import "../../components/Button.css"
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
                <a href="#" target="_blank" className="btn btnUnderlined cvBtnFooter">View CV</a>
            </footer>
        </div>
    )
}

export default Contact