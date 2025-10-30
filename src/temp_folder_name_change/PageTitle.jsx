import "./PageTitle.css"

function PageTitle({children}) {
    return(
        <div className="pageTitleContainer">
                <h2 className="pageTitle">{children}</h2>
        </div>
    )
}

export default PageTitle