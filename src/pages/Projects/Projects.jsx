import { useState } from "react";
import Card from "../../components/Card"
import PageTitle from "../../components/PageTitle"
import ProjectInfo from "../../components/ProjectInfo"
import "./Projects.css"

function Projects() {
    const projectOneImage = "../src/assets/OSRS-bank-planner-full.png"
    const projectOneMockUp = "../src/assets/OSRS-bank-planner-mock-up.jpg";

    const projectTwoImage = "../src/assets/Tv-show-library-small-cards.png";
    const projectTwoMockUp = "../src/assets/Tv-show-mock-up.jpg";

    const [currentImage, setCurrentImage] = useState(() => (projectOneImage));

    const handleOnMouseEnter = () => {
        setCurrentImage(projectOneMockUp);
    }

    const handleOnMouseOut = () => {
        setCurrentImage(projectOneImage);
    }

    return(
        <div className="projectsContainer">
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
                />
            </section>
            <div className="cardSection">
                <Card minWidth={"650px"} minHeight={"450px"} isImage={true}>
                    <img className="projectImage" onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut} src={currentImage} alt="OSRS bank planner images" />
                </Card>
            </div>
            </div>

            <div className="projectPanel">
            <div className="cardSection">
                <Card minWidth={"650px"} minHeight={"450px"}>
                    <img className="projectImage" onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut} src={currentImage} alt="Tv show tracker images" />
                </Card>
            </div>
            <section className="projectInfoSection">
                <ProjectInfo
                title={"Tv Show Tracker"}
                firstParagraph={"This was a website designed to help track tv shows you’re currently planning to watch, are watching, have seen or dropped."}
                secondParagraph={"Built with vanilla HTML, CSS and Javascript, this is a CRUD application that allows users to add, edit and delete the tv shows they want to keep track of."}
                />
            </section>
            </div>
        </div>
    )
}

export default Projects