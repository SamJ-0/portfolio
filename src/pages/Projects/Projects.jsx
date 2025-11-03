import Card from "../../components/Card"
import PageTitle from "../../components/PageTitle"
import ProjectInfo from "../../components/ProjectInfo"
import projectOneImg from "../../assets/OSRS-bank-planner-full.png"
import projectOneMockUp from "../../assets/OSRS-bank-planner-mock-up.jpg"
import projectTwoImg from "../../assets/Tv-show-library-small-cards.png"
import projectTwoMockUp from "../../assets/Tv-show-mock-up.jpg"
import "./Projects.css"

function Projects() {

    return(
        <div className="projectsContainer" id="projectSection">
            <section className="pageHeader">
                <PageTitle>Proj<br/>ects</PageTitle>
                <div className="horizontalLine"></div>
            </section>
            <div className="projectPanel">
            <section className="projectInfoSection">
                <ProjectInfo
                title={"Osrs bank planner V1"}
                firstParagraph={"This was a website designed to help layout and organise your in-game bank on the game Old School Runescape."}
                secondParagraph={"Built in React with Vite this website calls an API through a backend server using Node.js and Express.js to retrieve game item information and save them to a JSON file."}
                tags={["HTML", "CSS", "Javascript", "React", "Node.js", "Express.js", "API Integration"]}
                />
            </section>
            <div className="cardSection">
                <Card 
                isImage={true} 
                mainImage={projectOneImg} 
                hoverImage={projectOneMockUp}
                mainAltText={"OSRS bank planner screenshot"}
                hoverAltText={"OSRS bank planner shown on laptop screen"}
                />
            </div>
            </div>

            <div className="projectPanel">
            <div className="cardSection">
                <Card
                isImage={true}
                mainImage={projectTwoImg}
                hoverImage={projectTwoMockUp}
                mainAltText={"TV show tracker screenshot"}
                hoverAltText={"Tv show tracker shown on laptop screen"}
                />
            </div>
            <section className="projectInfoSection">
                <ProjectInfo
                title={"Tv Show Tracker"}
                firstParagraph={"This was a responsive website designed to help track tv shows you’re currently planning to watch, are watching, have seen or dropped."}
                secondParagraph={"Built with vanilla HTML, CSS and Javascript, this is a CRUD application that allows users to add, edit and delete the tv shows they want to keep track of."}
                tags={["HTML", "CSS", "Javascript", "localStorage"]}
                />
            </section>
            </div>
        </div>
    )
}

export default Projects