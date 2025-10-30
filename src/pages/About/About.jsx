import PageTitle from "../../Components/PageTitle"
import Card from "../../Components/Card"
import "./About.css"
function About() {
    return(
        <div className="aboutContainer">
            <section className="pageHeader">
                <div className="horizontalLineRight"></div>
                <PageTitle>Ab<br/>out</PageTitle>
            </section>
            <div className="aboutPanel">
             <section className="aboutContent">
                <p>
                    Hello, I’m Samantha. I love learning, problem-solving, creating solutions
                    and improving things so that they’re easy and intuitive. 
                    I also like to make things look good.
                </p>
                <p>
                    I started learning development through The Odin Project and once I felt
                    comfortable with the basics, I started branching into making my own projects
                    and looking things up as I needed.
                </p>
            </section>
            <div className="skillsBackground">
                <Card minWidth={"425px"} minHeight={"275px"} isImage={false}>
                    <h3 className="techStackHeader">Tech Stack</h3>
                    <ul className="skillsList">
                        <li>HTML</li>
                        <li className="listSlash">/</li>
                        <li>CSS</li>
                        <li className="listSlash">/</li>
                        <li>Javascript</li>
                    </ul>
                    <ul className="skillsList">
                        <li>React</li>
                        <li className="listSlash">/</li>
                        <li>Node.js</li>
                        <li className="listSlash">/</li>
                        <li>Express.js</li>
                    </ul>
                    <ul className="skillsList">
                        <li>API Integration</li>
                        <li className="listSlash">/</li>
                        <li>Git</li>
                        <li className="listSlash">/</li>
                        <li>Figma</li>
                    </ul>
                </Card>
            </div>
            </div>
        </div>
    )
}

export default About