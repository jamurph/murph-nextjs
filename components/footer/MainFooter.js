import styles from '../../styles/scss/components/footer/MainFooter.module.scss'
import Image from "next/image"

import godspeed from '../../public/images/hero/godspeed.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function MainFooter() {
    return (
        <footer className='mt-5 mb-5 p-sm-0 p-3'>
            <Container className={`${styles.footerContainer} text-light p-4 p-md-5 shadow-lg bg-dark`} style={{ minHeight: '400px' }} >
                <Row>
                    <Col xs={12} lg={{ span: 6 }}  >
                        <Image
                            className='border rounded-3 border-secondary'
                            src={godspeed}
                            placeholder='blur'
                            alt=""
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto"
                            }} />
                    </Col>
                    <Col xs={12} lg={{ span: 6 }} className='text-center my-5 d-flex flex-column'>
                        <div className='flex-grow-1 d-flex flex-column justify-content-center '>
                            <h2>Contact Me</h2>
                            <a className={styles.contactLink} href="mailto:jacobanthonymurphy@gmail.com?subject=From your website"><FontAwesomeIcon className='text-secondary' icon={faEnvelopeOpenText} /> Email</a>
                            {/*<a className={styles.contactLink} href="https://www.linkedin.com/in/jamurph/"><FontAwesomeIcon className='' icon={faLinkedin} /> LinkedIn</a>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
            <p className='p-3 text-center text-dark-accent'>Copyright {new Date().getFullYear()}.</p>
        </footer>
    );
}