import React, { Component } from 'react'
import { ReactComponent as LinkedIn } from '../img/linkedin.svg'
import { ReactComponent as Github } from '../img/github.svg'
import '../css/NavbarMobile.css'

export class NavbarMobile extends Component {
    render() {
        const mobileMenu = (
                <article className='NavBarMobileLinks'>
                    <div className='MobileLinkedIn'>
                        <a href='https://www.linkedin.com/in/salem-o-9730b418a/' target='_blank' rel='noopener noreferrer'>
                        <LinkedIn />
                        </a>
                    </div>
                    <div className='MobileGitHub'>
                        <a href='https://github.com/sob-user' target='_blank' rel='noopener noreferrer'>
                        <Github />
                        </a>
                    </div>
                </article>
        )

        return (
            <section className='NavBarMobileBox'>
                {this.props.mobileMenuIsOpen ? mobileMenu: null}
            </section>
        )
    }
}

export default NavbarMobile
