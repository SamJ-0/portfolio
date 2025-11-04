import "./Navbar.css"
import Button from "./Button"
import { useState } from "react"

function Navbar() {

    return(
        <nav className="nav">
            <a href="/" className="logo">SJ</a>
            <ul>
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
            <Button buttonStyle="cvBtn">View CV</Button>
        </nav>
    )

}

export default Navbar