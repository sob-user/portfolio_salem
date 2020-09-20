import React, { Component } from 'react'
import '../css/MyStory.css'

export class MyStory extends Component {
    render() {
        return (
            <section className='MyStoryBox'>
                <article className='MyStoryTitle'>
                Hi, I’m Salem. Nice to meet you.
                </article>
                <article className='MyStoryText'>
                Passionate about development since I was young, 
                I decided a year ago, to leave everything, 
                in order to devote myself to my passion. 
                I am naturally curious, and I am constantly working to improve my skills.
                </article>
            </section>
        )
    }
}

export default MyStory
