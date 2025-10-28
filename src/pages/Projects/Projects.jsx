import Card from "../../components/Card"
import PageTitle from "../../components/PageTitle"
import ProjectInfo from "../../components/ProjectInfo"
import "./Projects.css"

function Projects() {
    return(
        <div className="projectsContainer">
            <section className="pageHeader">
                <PageTitle>Proj<br/>ects</PageTitle>
                <div className="horizontalLine"></div>
            </section>
            <div className="projectPanel">
            <section className="projectInfoSection">
                <ProjectInfo
                title={"Osrs bank planner"}
                firstParagraph={"This was a website designed to help layout and organise your in-game bank on the game Old School Runescape."}
                secondParagraph={"Built in React with Vite this website calls an API through a backend server using Node.js and Express.js to retrieve game item information and save them to a JSON file."}
                />
            </section>
            <div className="cardSection">
                <Card minWidth={"450px"} minHeight={"550px"} isImage={true}>
                    
                </Card>
            </div>
            </div>

            <div className="projectPanel">
            <div className="cardSection">
                <Card minWidth={"650px"} minHeight={"450px"}></Card>
            </div>
            <section className="projectInfoSection">
                <ProjectInfo
                title={"Osrs bank planner"}
                firstParagraph={"This was a website designed to help layout and organise your in-game bank on the game Old School Runescape."}
                secondParagraph={"Built in React with Vite this website calls an API through a backend server using Node.js and Express.js to retrieve game item information and save them to a JSON file."}/>
            </section>
            </div>
        </div>
    )
}

export default Projects