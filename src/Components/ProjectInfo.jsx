import Tags from "./Tags"

import "./ProjectInfo.css"
import "../index.css"

function ProjectInfo({title, firstParagraph, secondParagraph}) {
    return(
        <div className="projectInfoContainer">
        <h3 className="projectTitle">{title}</h3>
        <div className="tagContainer">
                <Tags>HTML</Tags>
                <Tags>CSS</Tags>
                <Tags>Javascript</Tags>
                <Tags>React</Tags>
                <Tags>Node.js</Tags>
                <Tags>Express.js</Tags>
                <Tags>API Integration</Tags>
            </div>
            <div className="projectDetails">
            <p className="projectDetailsText">
                {firstParagraph}
            </p>
            <p className="projectDetailsText">
                {secondParagraph}
            </p>
            </div>
            <div className="icons">
                <img className="github" src="/github.svg" alt="Github logo" />
            </div>
        </div>
    )
}

export default ProjectInfo