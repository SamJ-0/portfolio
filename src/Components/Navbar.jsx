import "./Navbar.css"

function Navbar() {
    return(
        <nav className="nav">
            <a href="/" className="logo">SJ</a>
            <ul>
                <li className="active">
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="Contact">Contact</a>
                </li>
            </ul>
            <button className="viewCv">View CV</button>
        </nav>
    )

}

export default Navbar