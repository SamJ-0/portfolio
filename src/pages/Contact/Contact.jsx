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
                <div className="email">
                    <p className="emailLabel">Email:</p>
                    <p className="emailAddress">SamanthaJohnsonDev@outlook.com</p>
                </div>
                <Icons showLinkedIn={true} containerClass={"contactIcons iconContainer"}/>
                <a href="#" target="_blank" className="btn btnUnderlined cvBtnFooter">View CV</a>
            </footer>
        </div>
    )
}

export default Contact