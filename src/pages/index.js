import { graphql, Link } from "gatsby"
import React from "react"
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data}) => (
  <Layout>
    <SEO />

    <section className="content">
      <div className="container">
        <h1 className="bar">Ryo Blogへようこそ</h1>

        <div className="details">
          <p>このサイトはプログラミングを学習するなかで気付いたことやプログラムの記述方法をメモ代わりに残していく場所です。</p>
        </div>

      </div>
    </section>

    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
      </figure>
    </section>
    <section className="content bloglist">
      <div className="container">
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
                      <p>{node.publishDate}</p>
                      <h3>{node.title}</h3>
                      </Link>
                  </article>
              ))}
          </div>
      </div>
      </section>
  </Layout>
)

export const query = graphql`
query MyQuery {
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
  }
}
`