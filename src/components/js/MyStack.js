import React, { Component } from 'react'
import { ReactComponent as Server } from '../img/server.svg'
import { ReactComponent as Computer } from '../img/computer.svg'
import '../css/MyStack.css'

export class MyStack extends Component {
    render() {
        return (
            <section className='MyStackBox'>
                <article className='MyStackBoxContent'>
                    <div className='MyStackFront'>
                        <div className='MyStackLogo'>
                            <Server />
                        </div>
                        <div className='MyStackTitle'>
                            <div className='StackTitle'>Back-end</div>
                        </div>
                        <div className='MyStackStack'>
                            <div className='Stack'>
                            Languages I speak:
                            </div>
                            <div className='StackItem'>
                            NodeJs, ExpressJs, MongoDB, SQL
                            </div>
                        </div>
                        <div className='MyStackTools'>
                            <div className='StackTools'>
                                Dev Tools:
                            </div>
                            <div className='StackItemTools'>
                                <ul>
                                    <li>GitHub</li>
                                    <li>Bash</li>
                                    <li>Postman</li>
                                    <li>VPS</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='MyStackBack'>
                    <div className='MyStackLogo'>
                        <Computer />
                    </div>
                        <div className='MyStackTitle'>
                            <div className='StackTitle'>Front-end</div>
                        </div>
                        <div className='MyStackStack'>
                            <div className='Stack'>
                            Languages I speak:
                            </div>
                            <div className='StackItem'>
                            Javascript, JQuery, React, ReactNative, HTML, CSS
                            </div>
                        </div>
                        <div className='MyStackTools'>
                            <div className='StackTools'>
                                Dev Tools:
                            </div>
                            <div className='StackItemTools'>
                                <ul>
                                    <li>GitHub</li>
                                    <li>Netlify</li>
                                    <li>Visual Studio</li>
                                    <li>Font Awesome</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default MyStack
