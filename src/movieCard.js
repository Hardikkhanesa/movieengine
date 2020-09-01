import React from "react";

export default function MovieCard({movie}){

   

    return(
        <div className="card" >
        <img className="card--image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title + " poster"} />
        
         <div className="card--content">
             <h3 className="card--title">{movie.title}</h3>
             <p><small>Release date : {movie.release_date}</small></p>
             <p><small>Rating : {movie.vote_average}</small></p>
             <p className="card--desc">{movie.overview}</p>
         </div>

     </div>
    )
}