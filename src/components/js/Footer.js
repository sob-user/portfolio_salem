import React, { Component } from 'react'
import sobLogoV2 from '../img/sob_logo_v2.png'
import { ReactComponent as LinkedinV2 } from '../img/linkedinV2.svg'
import { ReactComponent as GitHubV2 } from '../img/githubV2.svg'
import { ReactComponent as Mail } from '../img/gmail.svg'
import '../css/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <section className='FooterBox'>
                <article className='FooterBoxEmpty'></article>
                <article className='FooterBoxLogo'>
                    <img src={sobLogoV2} alt='logo sob v2' />
                </article>
                <article className='FooterBoxLinks'>
                    <a href='https://www.linkedin.com/in/salem-o-9730b418a/' target='_blank' rel='noopener noreferrer'>
                        <LinkedinV2 />
                    </a>
                    <a href='https://github.com/sob-user' target='_blank' rel='noopener noreferrer'>
                        <GitHubV2 />
                    </a>
                    <a href="mailto:oulad.b.s@gmail.com">
                        <Mail />
                    </a>
                </article>
                <article className='FooterBoxCopyright'>
                Handmade by © Salem Oulad-Belkacem
                </article>
            </section>
        )
    }
}

export default Footer
