import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'
import News from '../components/news'

export default () => (
  <Layout>
    <SEO />

    <section className="content">
      <div className="container">
        <h1 className="bar">Ryo Blogへようこそ</h1>

        <div className="details">
          <p>このサイトではプログラミングを学習で役立つことやプログラムの記述方法を幅広く発信しています。</p>
        </div>
        <News />
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
    totalCount
  }
}
`