import Tags from "./Tags"
import "./ProjectInfo.css"
import "../index.css"
import Icons from "./Icons"

function ProjectInfo({title, firstParagraph, secondParagraph, tags}) {
    return(
            <div className="projectInfoContainer">
            <h3 className="projectTitle">{title}</h3>
            <div className="tagContainer">
                {tags.map((tag, index) => {
                    return <Tags key={index}>{tag}</Tags>
                })}
            </div>
            <div className="projectDesc">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
            </div>
            <Icons showLinkedIn={false} containerClass={"iconContainer"}/>
        </div>
    )
}

export default ProjectInfo