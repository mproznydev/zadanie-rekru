import React from 'react'
import {
    contactForm,
    contactForm__title,
    contactForm__subtitle,
    contactForm__text,
    contactForm__checkbox,
    contactForm__input,
    contactForm__submit,
    contactForm__checkboxLabel,
} from './ContactForm.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'

function ContactForm() {
    return (
        <div className={contactForm}>
            <h2 className={contactForm__title}>
                lorem ipsum lorem ipsum lorem ipsum
            </h2>

            <p className={contactForm__subtitle}>
                consectetur adipiscing elit. Ut auctor arcu
            </p>
            <p className={contactForm__text}>
                Zostaw kontakt, zadzwonimy do ciebie
            </p>
            <Form>
                <Form.Group>
                    <Form.Control
                        className={contactForm__input}
                        type="text"
                        placeholder="Imię i nazwisko"
                        style={{
                            border: '1px solid black',
                            borderRadius: '0',
                        }}
                    ></Form.Control>
                    <Form.Control
                        className={contactForm__input}
                        type="tel"
                        placeholder="Telefon"
                        style={{
                            border: '1px solid black',
                            borderRadius: '0',
                        }}
                    ></Form.Control>
                    <Form.Control
                        className={contactForm__input}
                        type="email"
                        placeholder="Email"
                        style={{
                            border: '1px solid black',
                            borderRadius: '0',
                        }}
                    ></Form.Control>
                    <Form.Control
                        className={contactForm__input}
                        type="test"
                        placeholder="Lorem ipsum"
                        style={{
                            border: '1px solid black',
                            borderRadius: '0',
                        }}
                    ></Form.Control>
                    <div className={contactForm__checkbox}>
                        <Form.Check.Input
                            type="checkbox"
                            style={{
                                border: '1px solid black',
                                borderRadius: '0',
                            }}
                        />
                        <Form.Check.Label
                            className={contactForm__checkboxLabel}
                        >
                            Wyrażam dobrowolną zgodę na przetwarzanie moich
                            danych osobowych więcej...
                        </Form.Check.Label>
                    </div>
                </Form.Group>
                <button type="submit" className={contactForm__submit}>
                    <span>WYŚLIJ</span>
                </button>
            </Form>
        </div>
    )
}

export default ContactForm
