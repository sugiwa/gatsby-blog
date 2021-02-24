import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import News from '../components/news'

export default ({data, location}) => (
    <Layout>
        <SEO 
            pagetitle='Ryoについて'
            pagedesc='プログラミングについての情報を発信しているサイトです。'
            pagepass={location.pathname}
            pageimg={data.icon.childImageSharp.original.src}
            pageimgw={data.icon.childImageSharp.original.width}
            pageimgh={data.icon.childImageSharp.original.height}
        />

        <article className="content">
            <div className="container">
                <h1 className="bar">About me</h1>

                <div className="postbody">
                    <Img fluid={data.icon.childImageSharp.fluid} style={{width:'200px',borderRadius:'100px',margin:'0 auto'}}/>
                    <h4>Ryo</h4>
                    <p>
                        地方国立大学で情報工学を学んでいる大学生。興味の赴くままに開発をしている。趣味は旅行や音楽。
                    </p>
                    <a href='https://twitter.com/waka_pre'>Twitter</a>
                </div>
                <News />
            </div>
        </article>
    </Layout>
)

export const query = graphql`
query {
    icon: file(relativePath: {eq: "icon.png"}) {
        childImageSharp {
            fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp
            }
            original {
                height
                src
                width
            }
        }
    }
}
`