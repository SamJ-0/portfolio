import { ArrowRight } from "lucide-react"
import "./Home.css"
import "../../components/Button.css"
import Icons from "../../components/Icons"

function Home() {
    return(
        <div className="homeContainer" id="homeSection">
            <section className="intro">
                <h2 className="hello">Hello, I'm</h2>
                <h1 className="name">
                    Samantha<br/>
                    Johnson</h1>
                <section className="homeBtns">
                <a href="/SamanthaJohnson_cv.pdf" target="_blank" className="btn btnFilled cvBtnHome">View CV</a>
                <a href="#projectSection" className="btn btnUnderlined viewProjectsBtn">View projects<span className="rightArrow"><ArrowRight strokeWidth={1.5}/></span></a>
                </section>
            </section>
            <section className="roleIntro">
                <div className="role">
                    <h2 className="jobLevel">Junior</h2>
                   <h2>Software developer</h2>
                </div>
                <p className="description">
                    Self-taught developer with an interest in UI, UX and design.
                    I love creating clean, engaging projects and combining my skills
                    to build complete applications.</p>
                    <Icons showLinkedIn={true} containerClass={"homeIcons"}/>
            </section>
        </div>
    )
}

export default Home