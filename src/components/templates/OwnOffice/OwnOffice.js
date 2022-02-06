import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { title, image, wrapper, decorationSvg } from './OwnOffice.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import Stripes from 'images/svgs/stripes1.svg'

function OwnOffice() {
    const data = useStaticQuery(graphql`
        query ownOfficeQuery {
            file(relativePath: { eq: "ownOfficex2.png" }) {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)
    return (
        <div className={wrapper}>
            <h1 className={title}>Lorem ipsum vs własne biuro</h1>
            <GatsbyImage
                className={image}
                image={data.file.childImageSharp.gatsbyImageData}
            ></GatsbyImage>
            <Stripes className={decorationSvg}></Stripes>
        </div>
    )
}

export default OwnOffice
