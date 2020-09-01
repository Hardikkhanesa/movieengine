import React, {useState} from "react";


export default function SearchMovie(){


const [query, setQuery] = useState('');

const [movies, setMovies]=useState([]);

const searchMovies = async(e) => {
    e.preventDefault();
    
   

    const url=`https://api.themoviedb.org/3/search/movie?api_key=38308f7f037d8d0111f42f41b8033de2&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
    const res=await fetch(url);
    const data=await res.json();
    

    // console.log(data.results);
    setMovies(data.results);

    }
    catch(err)
    {
        console.log(err);
    }
}

    return(
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query" >Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Seach movie name" value={query} onChange={(e) => setQuery(e.target.value)} />
            
            <button className="button" type="submit">Submit</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <div className="card" key={movie.id}>
               <img className="card--image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title + " poster"} />
                </div>
            ))
            }
        </div>
        </>
    )
}