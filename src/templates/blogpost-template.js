import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faClock, faFolderOpen} from '@fortawesome/free-regular-svg-icons'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, MARKS} from '@contentful/rich-text-types'
import useContentfulImage from '../utils/useContentfulImage'
import SEO from '../components/seo'
import {documentToPlainTextString} from '@contentful/rich-text-plain-text-renderer'
import Prism from '../components/prism'

const options = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2>
                <FontAwesomeIcon icon={faCheckSquare} />
                {children}
            </h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <Img 
                fluid={useContentfulImage(node.data.target.fields.file["ja-JP"].url)}
                alt={
                    node.data.target.fields.description
                        ? node.data.target.fields.description["ja-JP"]
                        : node.data.target.fields.title["ja-JP"]
                }
            />
        )
    },
    renderText: text => {
        return text.split("\n").reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
    renderMark: {
        [MARKS.CODE]: text => {
            for(let i=1; i<text.length; i++){
                if(i%2 === 0){
                    text[i] = '\n';
                }
            }
            return <Prism>{text}</Prism>
        }
    }
}

export default ({data, pageContext, location}) => (
    <Layout>
        <SEO 
            pagetitle={data.contentfulBlogPost.title}
            pagedesc={`${documentToPlainTextString(
                data.contentfulBlogPost.content.json
            ).slice(0, 70)}…`}
            pagepath={location.pathname}
            blogimg={`https:${data.contentfulBlogPost.eyecatch.file.url}`}
            pageimgw={data.contentfulBlogPost.eyecatch.file.details.image.width}
            pageimgh={data.contentfulBlogPost.eyecatch.file.details.image.height}
        />

        <article className="content">
            <div className="container">
                <h1 className="bar">{data.contentfulBlogPost.title}</h1>

                <aside className="info">
                    <time datetime={data.contentfulBlogPost.publishDate}>
                        <FontAwesomeIcon icon={faClock}/>
                        {data.contentfulBlogPost.publishDateJP}
                    </time>

                    <div className="cat">
                        <FontAwesomeIcon icon={faFolderOpen}/>
                        <ul>
                            {data.contentfulBlogPost.category.map(cat => (
                                <li className={cat.categorySlug} key={cat.id}>
                                    <Link to={`/cat/${cat.categorySlug}`} >{cat.category}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <div className="postbody">
                    {documentToReactComponents(
                        data.contentfulBlogPost.content.json,
                        options
                    )}
                </div>

                <ul className="postlink">
                    {pageContext.next && (
                        <li className="prev">
                            <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev" >
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <span>{pageContext.next.title}</span>
                            </Link>
                        </li>
                    )}
                    {pageContext.previous && (
                        <li className="next">
                            <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next" >
                                <span>{pageContext.previous.title}</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </li>
                    )}
                </ul>

            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query($id: String!) {
        contentfulBlogPost(id: {eq: $id}) {
            title
            publishDateJP: publishDate(formatString: "YYYY-MM-DD")
            publishDate
            category {
                category
                categorySlug
                id
            }
            eyecatch {
                fluid(maxWidth: 1600) {
                  ...GatsbyContentfulFluid_withWebp
                }
                description
                file {
                    details {
                        image {
                            width
                            height
                        }
                    }
                    url
                }
            }
            content {
                json
            }
        }
    }  
`