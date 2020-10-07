import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default () =>{
    const data = useStaticQuery(graphql`
        query{
            pattern: file(relativePath: {eq: "pattern.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1920, quality: 90){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return(
        <footer className="footer">
            <div className="container">
                <div className="site">
                <Link to={'/'}>
                    <Img fluid={data.pattern.childImageSharp.fluid} alt="ESSENTIALS"
                        style={{height:`100%`}}/>
                    <p>おいしい食材と食事を探求するサイト</p>
                </Link>
                </div>

                <ul className="sns">
                    <li>
                    <a href="https://twitter.com/"/>
                        <FontAwesomeIcon icon={faTwitter} />
                        <span className="sr-only">Twitter</span>
                
                    </li>
                    <li>
                    <a href="https://facebook.com/"/>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <span className="sr-only">Facebook</span>
                
                    </li>
                    <li>
                    <a href="http://instagram.com/"/>
                        <FontAwesomeIcon icon={faInstagram} />
                        <span className="sr-only">Instagram</span>
                
                    </li>
                </ul>
            </div>
        </footer>
    )
}