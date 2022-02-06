import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import {
    title,
    wrapper,
    grid,
    grid__image,
    grid__imageWrapper,
} from './Gallery.module.scss'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

function Gallery() {
    const data = useStaticQuery(graphql`
        query galleryQuery {
            allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
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
        <div className={wrapper}>
            <h1 className={title}>Galeria</h1>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className={grid}>
                        {data.allFile.edges.map(({ node }) => {
                            return (
                                <div className={grid__imageWrapper}>
                                    <GatsbyImage
                                        className={grid__image}
                                        image={
                                            node.childImageSharp.gatsbyImageData
                                        }
                                    ></GatsbyImage>
                                </div>
                            )
                        })}
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}

export default Gallery
