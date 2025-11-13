import "./Icons.css"

function Icons({showLinkedIn, containerClass, githubLink}) {
    return (
          <div className={containerClass}>
        {showLinkedIn ?
        <div className="icons">
            <a href="https://github.com/SamJ-0" target="_blank" className="githubIcon">
                <img className="github" src="/github.svg" alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/samantha-johnson-30818a397/" target="_blank" className="linkedInIcon">
                <img className="linkedIn" src="/InBug-White.png" alt="LinkedIn 'In' logo" />
            </a>
        </div>
        :
        <div className="icons">
        <a href={githubLink} target="_blank" className="githubIcon">
                <img className="github" src="/github.svg" alt="Github logo" />
            </a>
        </div>
        }
        </div>
    )
}

export default Icons