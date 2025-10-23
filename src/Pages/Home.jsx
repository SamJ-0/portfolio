import { ArrowRight } from "lucide-react"

function Home() {
    return(
        <div className="container">
            <section className="intro">
                <div className="hello">Hello, I'm</div>
                <p className="name">Samantha</p>
                <p className="name">Johnson</p>
                <button className="viewProjects">View projects<span className="rightArrow"><ArrowRight/></span></button>
            </section>
            <section className="roleIntro">
                <div className="role">
                    <div className="jobLevel">Junior</div>
                   <div>Software developer</div>
                </div>
                <p className="description">
                    Self-taught developer with an interest in UI, UX and<br></br>design.
                    I love creating clean, engaging projects and<br></br>combining my skills
                    to build complete applications.</p>
                    <div className="icons">
                            <img className="github" src="/github.svg" alt="Github logo" />
                            <img className="linkedIn" src="/InBug-White.png" alt="LinkedIn 'In' logo" />
                    </div>
            </section>
        </div>
    )
}

export default Home