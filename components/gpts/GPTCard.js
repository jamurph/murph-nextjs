
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function GPTCard({ title, description, imageUrl, href, badge }) {
    return (
        <div className="bg-light text-dark p-4 rounded-4 backlit border border-3 border-secondary m-3" style={{ maxWidth: '400px' }}>
            <div className="text-center d-flex flex-column h-100">
                {badge && (
                    <div className='text-end'>
                        <span className="bg-dark text-light badge mb-2">
                            {badge}
                        </span>
                    </div>
                )}
                <div className="m-auto">
                    <Image
                        src={imageUrl}
                        width="100px"
                        height="100px"
                        alt="Circular image"
                        className="rounded-circle"
                    />
                </div>
                <h3 className="mb-4"><b>{title}</b></h3>
                <p className="mb-4 flex-grow-1">{description}</p>
                <Link passHref
                    href={href}
                >
                    <Button type='primary' target='_blank'>View GPT <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Button>
                </Link>
            </div>
        </div>
    )
}