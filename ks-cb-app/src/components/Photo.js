import React from "react";

const Photo = props => (
  <div>
    <h3>{props.photo.title}</h3>
    <img class="gallery" src={props.photo.url} alt={props.photo.title} />
    <h5>Courtesy of nasa.gov; Copyright: {props.photo.copyright}</h5>
    <p class="desc">{props.photo.explanation}</p>
  </div>
);

export default Photo;
