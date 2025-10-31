import Tags from "./Tags"

import "./ProjectInfo.css"
import "../index.css"

function ProjectInfo({title, firstParagraph, secondParagraph, tags}) {
    return(
            <div className="projectInfoContainer">
            <h3 className="projectTitle">{title}</h3>
            <div className="tagContainer">
                {tags.map((tag) => {
                    return <Tags>{tag}</Tags>
                })}
            </div>
            <div className="projectDesc">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
            </div>
            <div className="icons">
                <img className="github" src="/github.svg" alt="Github logo" />
            </div>
        </div>
    )
}

export default ProjectInfo