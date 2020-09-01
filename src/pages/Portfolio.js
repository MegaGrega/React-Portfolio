import React from 'react'
import Grid from '@material-ui/core/Grid'
import Project from '../components/Project'


const drawscapeDesc = "Drawscape is a site where you can invite friends to private drawing rooms to chat and play games."
const guidMeDesc = "GuideMe is a peer to peer adventure hosting website where you can find trusted guides to take you on great adventures."
const wavelDesc = "GuideMe is a peer to peer adventure hosting website where you can find trusted guides to take you on great adventures."
const googleBooksDesc = "GuideMe is a peer to peer adventure hosting website where you can find trusted guides to take you on great adventures."
const noteTakerDesc = "GuideMe is a peer to peer adventure hosting website where you can find trusted guides to take you on great adventures."
const readMeDesc = "GuideMe is a peer to peer adventure hosting website where you can find trusted guides to take you on great adventures."

function About() {
    return (
        <div>
            <Grid>
                <h1>Projects</h1>
                <Project name="Drawscape" img="../../../public/drawscape.PNG" description={drawscapeDesc} link="http://drawscape.herokuapp.com"></Project>
                <Project name="GuideMe" img="https://guidemedimma.herokuapp.com/static/media/logot.fbdc80e1.png" description={guidMeDesc} link="https://guidemedimma.herokuapp.com/"></Project>
                <Project name="Wavel" img=" http://placekitten.com/200/300" description={wavelDesc} link="https://wild1k.github.io/Wavel-/"></Project>
                <Project name="Google Books Search" img="src\pages\Fix the Film.png" description={googleBooksDesc} link="https://react-google-books-search-mkg.herokuapp.com/"></Project>
                <Project name="Note Taker" img=" http://placekitten.com/200/300" description={noteTakerDesc} link="https://note-taker-mkg.herokuapp.com/"></Project>
                <Project name="ReadMe Generator" img=" http://placekitten.com/200/300" description={readMeDesc} link="https://github.com/MegaGrega/ReadmeGenerator"></Project>
            </Grid>
        </div>

    )
}

export default About;