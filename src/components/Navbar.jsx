import "./Navbar.css"
import Button from "./Button"
import { useState } from "react"

function Navbar() {
    const [active, setIsActive] = useState();

    const handleOnClick = () => {
        setIsActive(true);
    }

    return(
        <nav className="nav">
            <a href="/" className="logo">SJ</a>
            <ul>
                <li onClick={handleOnClick}>
                    <a href="#homeSection">Home</a>
                </li>
                <li onClick={handleOnClick}>
                    <a href="#projectSection">Projects</a>
                </li>
                <li onClick={handleOnClick}>
                    <a href="#aboutSection">About</a>
                </li>
                <li onClick={handleOnClick}>
                    <a href="#contactSection">Contact</a>
                </li>
            </ul>
            <Button buttonStyle="cvBtn">View CV</Button>
        </nav>
    )

}

export default Navbar