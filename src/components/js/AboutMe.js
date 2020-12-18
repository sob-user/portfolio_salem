import React, { Component } from 'react'
import { ReactComponent as SalemThemeGrey } from '../img/salemThemeGrey.svg'
import { ReactComponent as Banner } from '../img/banner.svg'
import '../css/AboutMe.css'

export class AboutMe extends Component {
    render() {
        return (
            <section className='AboutMeBox'>
                <article className='AboutMeTitle'>
                Full Stack Javascript Developer Junior
                </article>
                <article className='AboutMePitch'>
                I love coding.
                </article>
                <article className='AboutMeAvatar'>
                    <SalemThemeGrey />
                </article>
                <article className='AboutMeDrawing'>
                    <Banner />
                </article>
            </section>
        )
    }
}

export default AboutMe
