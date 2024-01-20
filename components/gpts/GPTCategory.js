
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from 'react-bootstrap'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function GPTCard({ title, description, href }) {
    return (
        <div className="bg-dark text-light p-lg-5 p-3 rounded-4 border border-3 border-secondary m-3 mt-4">
            <div className="">
                <h3 className="mb-4"><b>{title}</b></h3>
                <p className="mb-4">{description}</p>
                <div className="text-end">
                    <Link passHref href={href} legacyBehavior>
                        <Button className='lightLink'>View Category <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}