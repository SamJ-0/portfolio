import "./Navbar.css"
import Button from "./Button"

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
            <a href="#" target="_blank" className="cvBtn">View CV</a>
        </div>
        </header>
    )

}

export default Navbar