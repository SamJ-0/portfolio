import "./Navbar.css"
import "./Button.css"

function Navbar() {

    return(
        <header className="header">
            <div className="headerContent">
            <a href="/" className="logo">SJ</a>

        <nav className="nav">
            <ul className="navList">
                <li>
                    <a href="#homeSection">Home</a>
                </li>
                <li>
                    <a href="#projectSection">Projects</a>
                </li>
                <li>
                    <a href="#aboutSection">About</a>
                </li>
                <li>
                    <a href="#contactSection">Contact</a>
                </li>
                
            </ul>
        </nav>
            <a href="/SamanthaJohnson_cv.pdf" target="_blank" className="btn btnFilled cvBtn">View CV</a>
        </div>
        </header>
    )

}

export default Navbar