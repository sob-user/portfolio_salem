import React, { Component } from 'react'
import olderLogo from '../img/logo_older.png'
import parkAssitLogo from '../img/logo_javascript30.png'
import pikachu from '../img/pokemon.png'
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
                                <a href='http://older-stream.com' target='_blank' rel='noopener noreferrer'>
                                    view project
                                </a>
                            </div>
                            <div className='MyWorksLink'>
                                <a href='https://github.com/sob-user/mern_stream_project' target='_blank' rel='noopener noreferrer'>
                                    view code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='MyWorksItem'>
                        <img src={parkAssitLogo} alt='park assit game logo'></img>
                            <div className='MyWorksDescription'>My solutions for the #<a href='https://javascript30.com' target='_blank' rel='noopener noreferrer'>Wes Bos challenge</a>#</div>
                            <div className='MyWorksItemLink'>
                            <div className='MyWorksLink'>
                                <a href='https://sob-user.github.io/javascript30_mySolutions/' target='_blank' rel='noopener noreferrer'>
                                view project
                                </a>
                            </div>
                            <div className='MyWorksLink'>
                                <a href='https://github.com/sob-user/javascript30_mySolutions' target='_blank' rel='noopener noreferrer'>
                                    view code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='MyWorksItem'>
                        <img src={pikachu} alt='older app logo'></img>
                                <div className='MyWorksDescription'>
                                Pokédex using pokeAPI
                                </div>
                        <div className='MyWorksItemLink'>
                            <div className='MyWorksLink'>
                                <a href='https://sob-user.github.io/pokedexAPI_mySolution/' target='_blank' rel='noopener noreferrer'>
                                    view project
                                </a>
                            </div>
                            <div className='MyWorksLink'>
                                <a href='https://github.com/sob-user/pokedexAPI_mySolution' target='_blank' rel='noopener noreferrer'>
                                    view code
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
                </article>
            </section>
        )
    }
}

export default MyWorks
