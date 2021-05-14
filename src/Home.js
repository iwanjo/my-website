import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import ScrollToTop from "react-scroll-to-top";
import { Link }	from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import NavbarArea from './Navbar';
import styles from './css-modules/Home.module.css';

function Home() {
    

    return(
        <>
        <ScrollToTop smooth color="#BADAE8"/>
        <NavbarArea />
            <Container>
                <Row>
                    <Col sm={true}>
                        <h1>Hello!</h1>
                        <h1><span>I'm </span>Ian Wanjohi</h1>
                    </Col>

                    <Col sm={true}>
                        <img src="/i1.jpg"></img>
                    </Col>
                </Row>

            </Container>

        </>
    )

}

export default Home;