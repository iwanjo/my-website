import React from 'react'
import styles from './css-modules/Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

function NavbarArea() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className={styles.topNav}>
                <Navbar href="#home" className={styles.brand}>
                    <img src="/loading-logo.png" alt="Ian's Avatar" className={styles.avatar}></img>
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className={styles.navLinksArea}>

                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link href="#section1" className={styles.navLink}>Home</Nav.Link>
                </Link>


                <Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link className={styles.navLink}>About</Nav.Link>
                </Link>

                <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link className={styles.navLink}>Portfolio</Nav.Link>

                </Link>

                <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >

                <Nav.Link className={styles.navLink}>Contact</Nav.Link>
                </Link>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarArea;