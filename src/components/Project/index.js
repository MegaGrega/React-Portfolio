import React from 'react'
import './style.css'

function Project(props) {
    return (
       <div className = "project">
           <a href = {props.link} target = "blank"><h1>{props.name}</h1></a>
           <img className = "sizing" src={props.img}></img>
            <p>{props.description}</p>
       </div>
    )
}

export default Project;