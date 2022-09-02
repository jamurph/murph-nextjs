import style from '../../styles/scss/components/navigation/HeaderNavigation.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'

import Image from 'next/image'

import { Navbar, Container, Nav } from 'react-bootstrap'

import logo from '../../public/images/logo-circle2.png'

import { faCircleInfo, faFlask } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

export default function HeaderNavigation() {
    return (
        <Navbar collapseOnSelect={true} expand='lg' className="fixed-top shadow text-dark bg-light">
            <Container>
                    <Navbar.Brand className="navbar-brand d-flex align-items-center">
                        <Link href="/" passHref>
                            <Nav.Link style={{display: 'inherit'}}>
                                <Image className={style.ballLightning} src={logo} width='60px' height='60px' alt="" />    
                            </Nav.Link>
                        </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarText">
                    <div className='d-flex align-items-center'>
                        <span className='me-1 fs-6'>Menu</span> <span className="navbar-toggler-icon"></span>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarText">
                    <Nav className="mb-2 mb-lg-0 fs-5 w-100 justify-content-evenly">
                        <Link href='/about' passHref><Nav.Link className='text-center'><FontAwesomeIcon className='text-secondary' icon={faCircleInfo} /> About Me</Nav.Link></Link>
                        <Link href='/thoughts' passHref><Nav.Link className='text-center'><FontAwesomeIcon className='text-secondary' icon={faBrain} /> Thoughts</Nav.Link></Link>
                        <Link href='/experiments' passHref><Nav.Link className='text-center'><FontAwesomeIcon className='text-secondary' icon={faFlask} /> Web Experiments</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }