import React from 'react'
import Grid from '@material-ui/core/Grid'
import Project from '../components/Project'
import dsImage from '../assets/images/drawscape.PNG'
import wavImage from '../assets/images/wavel image.PNG'
import noteImage from '../assets/images/notetaker.PNG'
import gbImage from '../assets/images/google books.PNG'
import rmgImage from '../assets/images/readmeGen.PNG'

const drawscapeDesc = "Drawscape is a site where you can invite friends to private drawing rooms to chat and play games."
const guidMeDesc = "GuideMe is a peer to peer adventure hosting website where you can find trusted guides to take you on great adventures."
const wavelDesc = "Wavel is an application that helps you find various information about your next travel destination"
const googleBooksDesc = "This is a react app that queries the google books api to help you create your reading list"
const noteTakerDesc = "This app lets you take notes and look at them later"
const readMeDesc = "This is a command line application that aids the generation of readMe files"

function About() {
    return (
        <div>
            <Grid>
                <h1>Projects</h1>
                <Project name="Drawscape" img={dsImage}  description={drawscapeDesc} link="http://drawscape.herokuapp.com"></Project>
                <Project name="GuideMe" img="https://guidemedimma.herokuapp.com/static/media/logot.fbdc80e1.png" description={guidMeDesc} link="https://guidemedimma.herokuapp.com/"></Project>
                <Project name="Wavel" img={wavImage} description={wavelDesc} link="https://wild1k.github.io/Wavel-/"></Project>
                <Project name="Google Books Search" img={gbImage} description={googleBooksDesc} link="https://react-google-books-search-mkg.herokuapp.com/"></Project>
                <Project name="Note Taker" img={noteImage} description={noteTakerDesc} link="https://note-taker-mkg.herokuapp.com/"></Project>
                <Project name="ReadMe Generator" img={rmgImage} description={readMeDesc} link="https://github.com/MegaGrega/ReadmeGenerator"></Project>
            </Grid>
        </div>

    )
}

export default About;