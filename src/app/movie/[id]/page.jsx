'use client';
import { useState, useEffect } from 'react';



export default function MovieDetails({ params }){
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getMovie = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US`
            );
            const movie = await res.json();
            setMovie(movie);
            setLoading(false);
        }
        getMovie();
    }
    , []);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-center mt-8 mb-9 text-teal-600">Movie Details</h1>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="md:w-2/3">
                    <h1 className="text-5xl font-bold text-teal-600">{movie.title}</h1>
                    <h4 className="text-slate-100 text-2xl mt-2">{movie.overview}</h4>
                    <h4 className="text-slate-100 text-xl mt-2">Release Date </h4><p className ="text-xl text-yellow-500">{movie.release_date}</p>
                    <h4 className="text-slate-100 text-xl mt-2">Runtime </h4> <p className ="text-xl text-yellow-500">{movie.runtime} minutes</p>
                    <h4 className="text-slate-100 text-xl mt-2">Rating </h4> <p className ="text-xl text-yellow-500">{movie.vote_average}</p>
                    
                </div>
                

        </div>
        </div>

    );

}