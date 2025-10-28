import "./Card.css"

function Card({isImage, children, minWidth, minHeight}) {
    return(
        <div className="cardContainer" style={{minWidth: minWidth, minHeight: minHeight}}>
            {isImage ?  <div className="cardContentImg">
                {children}
            </div> :
             <div className="cardContents">
                {children}
            </div>
            }
           
        </div>
    )
}

export default Card