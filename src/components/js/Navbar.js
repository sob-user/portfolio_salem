import React, { Component } from 'react'
import sob_logo from '../img/sob_logo.png'
import { ReactComponent as LinkedIn } from '../img/linkedin.svg'
import { ReactComponent as Github } from '../img/github.svg'
import { ReactComponent as Menu } from '../img/menu.svg'
import NavbarMobile from '../js/NavbarMobile'
import '../css/Navbar.css'

export class Navbar extends Component {
    state = {
        mobileMenuIsOpen: false
    }

    openMenu = () => {
        if(this.state.mobileMenuIsOpen === false) {
        this.setState({ mobileMenuIsOpen: true })
        } else if(this.state.mobileMenuIsOpen === true) {
            this.setState({ mobileMenuIsOpen: false})
        }
    }


    render() {
        return (
            <section className='NavBarBox'>
                <article className='NavBarLogo'>
                    <img src={sob_logo} alt='salem portfolio logo'/>
                </article>
                <article className='NavBarLinks'>
                    <div className='LinkedIn'>
                        <a href='https://www.linkedin.com/in/salem-o-9730b418a/' target='_blank' rel='noopener noreferrer'>
                        <LinkedIn />
                        </a>
                    </div>
                    <div className='GitHub'>
                        <a href='https://github.com/sob-user' target='_blank' rel='noopener noreferrer'>
                        <Github />
                        </a>
                    </div>
                    <div className='menuResponsive'>
                        <Menu onClick={this.openMenu} />
                    </div>
                </article>
                {this.state.mobileMenuIsOpen ? <NavbarMobile mobileMenuIsOpen={this.state.mobileMenuIsOpen}/>: null}
            </section>
        )
    }
}


export default Navbar
