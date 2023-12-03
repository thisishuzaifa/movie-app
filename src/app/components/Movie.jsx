'use client';
import { useState, useEffect } from 'react';


export default function Movie({ movie }){

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const checkLiked = async () => {
          localStorage.getItem(`${movie?.id}`) ? setLiked(true) : setLiked(false);
        };
        checkLiked();
      }, [movie]);
    
      const handleLike = () => {
        console.log(movie);
        setLiked(!liked);
        liked
          ? localStorage.removeItem(`${movie.id}`)
          : localStorage.setItem(`${movie.id}`, JSON.stringify(movie));
      };

    return(
        <>
        {movie ? (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="flex flex-row justify-center items-center">
                    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={handleLike}>
                        {liked ? 'Unlike' : 'Like'}
                    </button>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl font-bold text-center mt-4">{movie.title}</p>
                        <p className="text-xl font-bold text-center mt-4">{movie.release_date}</p>
                        <p className="text-xl font-bold text-center mt-4">{movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <h1 className="text-4xl font-bold text-center mt-8 max-width-6xl">Loading...</h1>
        )}
        </>
);}
