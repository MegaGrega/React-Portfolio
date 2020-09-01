import React from 'react'
import Grid from '@material-ui/core/Grid'
import Project from '../components/Project'

const drawscapeDesc = "Drawscape is a site where you can invite friends to private drawing rooms to chat and play games."


function Contact() {
    return (
        <Grid>
           <Project name = "Drawscape" img=" http://placekitten.com/200/300" description = {drawscapeDesc} link="http://drawscape.herokuapp.com"></Project> 
        </Grid>
    )
}

export default Contact;