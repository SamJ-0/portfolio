import Card from "../../components/Card"
import ProjectInfo from "../../components/ProjectInfo"
import "./Projects.css"

function Projects() {
    return(
        <div className="projectsContainer">
            <section className="heading">
                <h2 className="projects">Projects</h2>
            </section>
            <section className="projectContents">
                <div>
                    <ProjectInfo 
                title="OSRS bank planner"
                firstParagraph="This was a website designed to help layout and organise your
                in-game bank on the game Old School Runescape."
                secondParagraph="Built in React with Vite this website calls an API through a backend server
                using Node.js and Express.js to retrieve game item information and save them
                to a JSON file."
                />
                </div>
                <div>
                <Card/>
                </div>
            </section>
            </div>
    )
}

export default Projects