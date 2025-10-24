import "./Tags.css"

function Tags({ children }) {
    return(
        <div className="tagWrapper">
            <p className="tagText">{children}</p>
        </div>
    )
}

export default Tags