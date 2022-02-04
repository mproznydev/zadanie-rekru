import React, { useState, useEffect } from 'react'
import backgroundImage1 from 'images/hero1.png'
import backgroundImage2 from 'images/hero2x2.png'
import backgroundImage3 from 'images/hero3x2.png'
import {
    heroWrapper,
    background,
    hero,
    sliderContainer,
    contactForm,
    callToActionWrapper,
    hero__textWrapper,
} from './Hero.module.scss'
import Header from '../organisms/header'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Hero() {
    const [photos, setPhotos] = useState([])
    const [currentPhoto, setCurrentPhoto] = useState(0)

    useEffect(() => {
        setPhotos([backgroundImage1, backgroundImage2, backgroundImage3])

        const photoInterval = setInterval(handleNextPhoto, 5000)

        return () => {
            clearInterval(photoInterval)
        }
    }, [])
    const handleNextPhoto = () => {
        setCurrentPhoto((prev) => (prev < 2 ? prev + 1 : 0))
    }

    return (
        <div className={heroWrapper}>
            <Header></Header>
            <img
                src={photos[currentPhoto]}
                className={background}
                alt="office photo"
            ></img>
            <div className={hero}>
                <div className={callToActionWrapper}>
                    <div className={hero__textWrapper}>
                        <h1>Firma</h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut auctor
                        </h2>
                    </div>
                    <div className={contactForm}>
                        <p>lorem ipsum</p>
                        <p>lorem ipsum lorem ipsum</p>
                        <p>consectetur adipiscing elit. Ut auctor arcu</p>
                        <p>Zosta kontakt, zadzwonimy do ciebie</p>
                        <p>Zosta kontakt, zadzwonimy do ciebie</p>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Imię i nazwisko"
                                ></Form.Control>
                                <Form.Control
                                    type="tel"
                                    placeholder="Telefon"
                                ></Form.Control>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                ></Form.Control>
                                <Form.Control
                                    type="test"
                                    placeholder="Lorem ipsum"
                                ></Form.Control>
                                <Form.Check
                                    type="checkbox"
                                    label="Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej..."
                                />
                            </Form.Group>
                            <Button type="submit">Wyślij</Button>
                        </Form>
                    </div>
                </div>

                <div className={sliderContainer}>xd</div>
            </div>
        </div>
    )
}

export default Hero
