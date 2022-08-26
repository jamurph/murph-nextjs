import style from '../styles/scss/components/MXMListItem.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Container, Row, Col} from 'react-bootstrap'

import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function MXMListItem({title, description, imageUrl, href}) {
    return (
        <Link href={href}>
            <Container className={`${style.liContainer} border border-secondary border-1 bg-dark rounded-4 p-4 shadow`}>
                <Row>
                    <Col xs={12} lg={4}>
                        <div className={`${style.liImage} shadow-lg`}>
                            <Image className={` rounded-3 shadow-lg`} src={imageUrl} layout='responsive' width={1920} height={1080}/>
                        </div>
                    </Col>
                    <Col xs={12} lg={8} className="flex-grow-1 p-0">
                        <div className='p-3 pb-1 d-flex flex-column justify-content-evenly h-100'>
                            <h4 className='mb-4'><b>{title}</b></h4>
                            <p className="ms-3 flex-grow-1">{description}</p>
                            <p className={`${style.liArrow} mb-0 text-end text-secondary`}>Read Thought &nbsp;<FontAwesomeIcon icon={faArrowRight} /></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Link>
    )
  }