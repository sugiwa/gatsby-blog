import { graphql } from "gatsby"
import React from "react"
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data}) => (
  <Layout>
    <SEO />
    <section className="hero">
      <figure>
        <Img fluid={data.hero.childImageSharp.fluid} alt=""/>
      </figure>
      <div className="catch">
        <h1>There is no love sincerer than<br/> the love of food.</h1>
        <p>食物を愛するよりも誠実な愛はない ― バーナード・ショー</p>
      </div>
      <div className="wave">
        <img src="/images/wave.svg" alt=""/>
      </div>
    </section>

    <section className="food">
      <div className="container">
        <h2 className="bar">Food <span>Essence</span></h2>

        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.fruit.childImageSharp.fluid} alt=""/>
            </figure>
            <h3>フルーツ</h3>
            <p>FRUIT</p>
            <p>甘くてすっぱくておいしい果実たち。<br/>旬のフルーツを満喫します。</p>
          </div>

          <div className="detail">
            <figure>
              <Img fluid={data.grain.childImageSharp.fluid} alt=""/>
            </figure>
            <h3>穀物</h3>
            <p>GRAIN</p>
            <p>食事の基本となる穀物。<br/>毎日の活動のエネルギー源になります。</p>
          </div>

          <div className="detail">
            <figure>
              <Img fluid={data.beverage.childImageSharp.fluid} alt=""/>
            </figure>
            <h3>飲み物</h3>
            <p>BEVERAGE</p>
            <p>リラックスするのに欠かせない飲み物。<br/>お気に入りの一杯はありますか？</p>
          </div>
        </div>
      </div>
    </section>

    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <Img fluid={data.berry.childImageSharp.fluid} alt="赤く熟したベリー"/>
      </figure>
    </section>
  </Layout>
)

export const query = graphql`
query MyQuery {
  hero: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fruit: file(relativePath: {eq: "fruit.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  grain: file(relativePath: {eq: "grain.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  beverage: file(relativePath: {eq: "beverage.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  berry: file(relativePath: {eq: "berry.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`