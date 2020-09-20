import React, { Component } from 'react'
import olderLogo from '../img/logo_older.png'
import { ReactComponent as Safari } from '../img/safari.svg'
import { ReactComponent as Bash } from '../img/bash.svg'
import '../css/MyWorks.css'

export class MyWorks extends Component {
    render() {
        return (
            <section className='MyWorksBox'>
                <article className='MyWorksTitle'>
                    My Projects
                </article>
                <article className='MyWorksResume'>
                Here retrieve a few personnal projects I've worked on recently.
                </article>
                <article className='MyWorksItems'>
                    <div className='MyWorksItem'>
                        <img src={olderLogo} alt='older app logo'></img>
                                <div className='MyWorksDescription'>
                                    Streaming website realized in MERN stack with Redux
                                </div>
                        <div className='MyWorksItemLink'>
                            <div className='MyWorksLink'>
                                <a href='https://older-stream.com' target='_blank' rel='noopener noreferrer'>
                                    <Safari /> 
                                </a>
                            </div>
                            <div className='MyWorksLink'>
                                <a href='https://github.com/sob-user/mern_stream_project' target='_blank' rel='noopener noreferrer'>
                                    <Bash />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='MyWorksItem'>
                        Work in progress
                    </div>
                    <div className='MyWorksItem'>
                        Work in progress
                    </div>
                    <div className='MyWorksItem'>
                        Work in progress
                    </div>
                    <div className='MyWorksItem'>
                        Work in progress
                    </div>
                    <div className='MyWorksItem'>
                        Work in progress
                    </div>
                </article>
            </section>
        )
    }
}

export default MyWorks
