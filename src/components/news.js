import React from 'react'
import {Link, graphql, useStaticQuery}from 'gatsby'
import Img from 'gatsby-image'

export default () =>{
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: {order: DESC, fields: publishDate}
                skip: 0
                limit: 4
            ) {
                edges {
                    node {
                        title
                        publishDate(formatString: "YYYY-MM-DD")
                        id
                        slug
                        eyecatch {
                            fluid(maxWidth: 573) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                            description
                        }
                    }
                }
                totalCount
            }
        }  
    `)

    return(
        <div className='newsframe'>
            <h2 className='bar'>最新記事</h2>
            <div className="posts">
                {data.allContentfulBlogPost.edges.map(({node}) => (
                    <article className="post" key={node.id}>
                        <Link to={`/blog/post/${node.slug}`}>
                        <figure>
                            <Img 
                                fluid={node.eyecatch.fluid} 
                                alt={node.eyecatch.description}
                                style={{height: '100%'}} 
                            />
                        </figure>
                        <div className="postdescription">
                            <p>{node.publishDate}</p>
                            <h3>{node.title}</h3>
                        </div>
                        </Link>
                    </article>
                ))}
                <Link to={"/blog"} className="allpost">記事一覧を見る</Link>
            </div>
        </div>
    )
}