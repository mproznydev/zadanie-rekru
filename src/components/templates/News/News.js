import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
    title,
    wrapper,
    newsWrapper,
    news,
    news__image,
    news__data,
    news__title,
    news__moreButton,
} from './News.module.scss'

function News() {
    const data = useStaticQuery(graphql`
        query newsQuery {
            allFile(filter: { relativeDirectory: { eq: "news" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(
                                transformOptions: {
                                    cropFocus: CENTER
                                    fit: COVER
                                }
                                quality: 70
                            )
                        }
                    }
                }
            }
        }
    `)
    console.log(data.allFile.edges[0].node.childImageSharp.gatsbyImageData)
    return (
        <div className={wrapper}>
            <h1 className={title}>Aktualności</h1>
            <div className={newsWrapper}>
                <div className={news}>
                    <GatsbyImage
                        className={news__image}
                        image={
                            data.allFile.edges[0].node.childImageSharp
                                .gatsbyImageData
                        }
                    ></GatsbyImage>
                    <p className={news__data}>01.01.2021</p>
                    <p className={news__title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                    </p>
                    <button className={news__moreButton}>Więcej</button>
                </div>
                <div className={news}>
                    <GatsbyImage
                        className={news__image}
                        image={
                            data.allFile.edges[1].node.childImageSharp
                                .gatsbyImageData
                        }
                    ></GatsbyImage>
                    <p className={news__data}>01.01.2021</p>
                    <p className={news__title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                    </p>
                    <button className={news__moreButton}>Więcej</button>
                </div>
                <div className={news}>
                    <GatsbyImage
                        className={news__image}
                        image={
                            data.allFile.edges[2].node.childImageSharp
                                .gatsbyImageData
                        }
                    ></GatsbyImage>
                    <p className={news__data}>01.01.2021</p>
                    <p className={news__title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                    </p>
                    <button className={news__moreButton}>Więcej</button>
                </div>
            </div>
        </div>
    )
}

export default News
