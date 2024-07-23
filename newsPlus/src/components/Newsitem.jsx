import React from 'react'
import image from '../assets/images.jpeg'

const Newsitem = ({title,description, src, url}) => {
  return (
   
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:'345px'}}>
  <img src={src?src:image} style={{height:"200px",width:"360px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title.slice(0,50)}</h5>
    <p class="card-text">{description?description.slice(0,90):"News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. "}</p>
    <a href={url} class="btn btn-primary">read more</a>
  </div>
</div>
    
  )
}

export default Newsitem