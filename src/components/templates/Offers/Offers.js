import React from 'react'
import {
    gridWrapper,
    offer,
    offerLower,
    offer__info,
    offer__info__title,
    offer__info__bar,
    offer__info__cost,
    offer__image,
    offer__button,
} from './Offers.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

function Offers() {
    const data = useStaticQuery(graphql`
        query offersQuery {
            allFile(filter: { relativeDirectory: { eq: "offers" } }) {
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

    return (
        <div className={gridWrapper}>
            <div className={offer}>
                <div className={offer__info}>
                    <p className={offer__info__title}>Biuro</p>
                    <div className={offer__info__bar}></div>
                    <p className={offer__info__cost}>Od 1000zł/msc</p>
                </div>
                <GatsbyImage
                    image={
                        data.allFile.edges[0].node.childImageSharp
                            .gatsbyImageData
                    }
                    className={offer__image}
                    alt="test"
                ></GatsbyImage>
                <button className={offer__button}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <div className={offer}>
                <div className={offer__info}>
                    <p className={offer__info__title}>Lorem ipsum</p>
                    <div className={offer__info__bar}></div>
                    <p className={offer__info__cost}>Od 1000zł/msc</p>
                </div>
                <GatsbyImage
                    image={
                        data.allFile.edges[1].node.childImageSharp
                            .gatsbyImageData
                    }
                    className={offer__image}
                    alt="test"
                ></GatsbyImage>
                <button className={offer__button}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <div className={`${offer} ${offerLower}`}>
                <div className={offer__info}>
                    <p className={offer__info__title}>Biuro</p>
                    <div className={offer__info__bar}></div>
                    <p className={offer__info__cost}>Od 1000zł/msc</p>
                </div>
                <GatsbyImage
                    image={
                        data.allFile.edges[2].node.childImageSharp
                            .gatsbyImageData
                    }
                    className={offer__image}
                    alt="test"
                ></GatsbyImage>
                <button className={offer__button}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <div className={`${offer} ${offerLower}`}>
                <div className={offer__info}>
                    <p className={offer__info__title}>
                        lorem ipsum lorem ipsum
                    </p>
                    <div className={offer__info__bar}></div>
                    <p className={offer__info__cost}>Od 1000zł/msc</p>
                </div>
                <GatsbyImage
                    image={
                        data.allFile.edges[3].node.childImageSharp
                            .gatsbyImageData
                    }
                    className={offer__image}
                    alt="test"
                ></GatsbyImage>
                <button className={offer__button}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Offers
