import React from 'react'
import './style.css'

function Project(props) {
    return (
       <div>
           <a href = {props.link} target = "blank"><h3>{props.name}</h3></a>
           <img src={props.img}></img>
            <p>{props.description}</p>
       </div>
    )
}

export default Project;