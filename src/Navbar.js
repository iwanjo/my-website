import React from 'react'
import styles from './css-modules/Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';
import { Link as Scroll } from "react-scroll";

function NavbarArea() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className={styles.topNav}>
            <LinkContainer to="/">
                <Navbar href="#home" className={styles.brand}>
                    <img src="/ian-logo.png" alt="Ian's Avatar" className={styles.avatar}></img>
                </Navbar>
            </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className={styles.navLinksArea}>

                <Scroll
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link href="#section1" className={styles.navLink}>Home</Nav.Link>
                </Scroll>


                {/* <LinkContainer to="/about">
                    <Nav.Link className={styles.navLink}>About</Nav.Link>
                </LinkContainer> */}

                <Scroll
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link className={styles.navLink}>Projects</Nav.Link>

                </Scroll>

                <Scroll
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >

                <Nav.Link className={styles.navLink}>Contact</Nav.Link>
                </Scroll>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarArea;
