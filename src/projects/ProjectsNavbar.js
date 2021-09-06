import React from 'react';
import styles from '../css-modules/Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';

function ProjectsNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className={styles.topNav}>
            <LinkContainer to="/">
                <Navbar href="#home" className={styles.brand}>
                    <img src="/ian-logo.png" alt="Ian's Avatar" className={styles.avatar}></img>
                </Navbar>
            </LinkContainer>
                
            </Navbar>
        </>
    )
}

export default ProjectsNavbar;
