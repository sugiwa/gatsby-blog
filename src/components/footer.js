import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default () =>(
    <footer className="footer">
        <div className="container">

            <ul className="sns">
                <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </a>
                </li>
                <li>
                <a href="https://facebook.com/">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span className="sr-only">Facebook</span>
                </a>
                </li>
                <li>
                <a href="http://instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Instagram</span>
                </a>
                </li>
            </ul>
        </div>
    </footer>
)