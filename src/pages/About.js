import React from 'react'
import Grid from '@material-ui/core/Grid'

function About() {
    return (
        <>

            <div className="about">
                <h1>About Me</h1>
                <hr></hr>
                <img className="round" src="https://media-exp1.licdn.com/dms/image/C5603AQFGmRvqUR2_gA/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=6orgzJKxCxOEE_3YNAL02k57qLX_6G8jUCrwcX_qgh8"></img>
                <p>
                    Hi, I'm Matthew Grega, a freelance videographer and editor.
                    I am 23 years and currently learning HTML, CSS, and Javascript.
                    In my spare time I like to play strategy games and stream on twitch.
                </p>
            </div>
            <div className="about">
                <h1>Links</h1>
                <hr></hr>
                <div>
                    <a href="https://www.linkedin.com/in/matthew-grega-2047221b1/" target="_blank">
                        <img className="round" src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png"></img>
                    </a>
                    <a className="footerItem" href="https://github.com/MegaGrega" target="_blank">
                        <img className="round" src="http://iconsetc.com/icons-watermarks/flat-square-white-on-black/social-media/social-media_github/social-media_github_flat-square-white-on-black_512x512.png"></img>
                    </a>
                </div>

            </div>

        </>
    )
}

export default About;