import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    heroWrapper,
    hero,
    hero__textWrapper__title,
    hero__textWrapper__subTitle,
    hero__textWrapper,
    backgroundWrapper,
    background,
    background__image,
    carouselNavigation,
    carouselNavigation__buttonLeft,
    carouselNavigation__buttonRight,
    carouselNavigation__info,
    carouselNavigation__info__timespan,
} from './Hero.module.scss'
import Header from '../../organisms/Header/Header'
import ContactForm from '../../organisms/ContactForm/ContactForm'
import { graphql, useStaticQuery } from 'gatsby'

function Hero() {
    const [currentImage, setCurrentImage] = useState(0)

    const data = useStaticQuery(graphql`
        query heroQuery {
            allFile(filter: { relativeDirectory: { eq: "hero-background" } }) {
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

    const handleNextImage = () => {
        const imageQty = data.allFile.edges.length
        setCurrentImage((prev) => (prev < imageQty - 1 ? prev + 1 : 0))
    }
    const handlePreviousImage = () => {
        const imageQty = data.allFile.edges.length
        setCurrentImage((prev) => {
            if (prev !== 0 && prev <= imageQty - 1) {
                return prev - 1
            } else if (prev === 0) {
                return imageQty - 1
            }
        })
    }
    const handleSelect = (selectedcurrentImage, e) => {
        setCurrentImage(selectedcurrentImage)
    }

    return (
        <div className={heroWrapper}>
            <Header></Header>
            <div className={hero}>
                <div className={hero__textWrapper}>
                    <h1 className={hero__textWrapper__title}>Firma</h1>
                    <h2 className={hero__textWrapper__subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut auctor
                    </h2>
                </div>
                <ContactForm></ContactForm>
            </div>
            <div className={carouselNavigation}>
                <button
                    onClick={handlePreviousImage}
                    className={carouselNavigation__buttonLeft}
                >
                    <i
                        className="bi bi-arrow-left"
                        style={{ fontSize: '3rem' }}
                    ></i>
                </button>
                <button
                    onClick={handleNextImage}
                    className={carouselNavigation__buttonRight}
                >
                    <i
                        className="bi bi-arrow-right"
                        style={{ fontSize: '3rem' }}
                    ></i>
                </button>
                <div className={carouselNavigation__info}>
                    <p>0{currentImage + 1}</p>
                    <span className={carouselNavigation__info__timespan}></span>
                    <p>0{data.allFile.edges.length}</p>
                </div>
            </div>
            <div className={backgroundWrapper}>
                <Carousel
                    fade
                    activeIndex={currentImage}
                    controls={false}
                    indicators={false}
                    onSelect={handleSelect}
                >
                    {data.allFile
                        ? data.allFile.edges.map(({ node }, index) => (
                              <Carousel.Item className={background} key={index}>
                                  <GatsbyImage
                                      className={background__image}
                                      image={
                                          node.childImageSharp.gatsbyImageData
                                      }
                                      key={index}
                                      alt="office image"
                                  ></GatsbyImage>
                              </Carousel.Item>
                          ))
                        : null}
                </Carousel>
            </div>
        </div>
    )
}

export default Hero
