import { ArrowRight } from "lucide-react"

function Home() {
    return(
        <div className="container">
            <section className="intro">
                <h2 className="hello">Hello, I'm</h2>
                <h1 className="name">
                    Samantha<br/>
                    Johnson</h1>
                <button className="viewProjects">View projects<span className="rightArrow"><ArrowRight/></span></button>
            </section>
            <section className="roleIntro">
                <div className="role">
                    <div className="jobLevel">Junior</div>
                   <div>Software developer</div>
                </div>
                <p className="description">
                    Self-taught developer with an interest in UI, UX and<br/>design.
                    I love creating clean, engaging projects and<br/>combining my skills
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