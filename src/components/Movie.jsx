import React from 'react'

const Movie = (props) => {
  const myStyle = {
    width: '18rem',
    marginTop: '10px',
    marginRight: '20px'
  };
  
  return (
    <div className="card" style={myStyle}>
      <img src={props.poster} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          {/* <p className="card-text">Imdb Id: {props.imdbID}</p> */}
      </div>
    </div>
  )
}

export default Movie
