import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

export default () =>(
    <footer className="footer">
        <div className="container">

            <ul className="sns">
                <li>
                <a href="https://twitter.com/waka_pre">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </a>
                </li>
            </ul>
        </div>
    </footer>
)