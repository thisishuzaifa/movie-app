'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MovieCard({ movie }){
    const [liked, setLiked] = useState(false);

    const toggleLiked = () => {
        setLiked(!liked);
        liked
        ? localStorage.removeItem(`${movie.id}`)
        : localStorage.setItem(`${movie.id}`, JSON.stringify(movie));
    }


    useEffect(() => {
        const checkLiked = () => {
            localStorage.getItem(`${movie.id}`) ? setLiked(true) : setLiked(false);
        };
        checkLiked();
    }, [movie]); 

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Link href={`/movie/${movie.id}`}>
                    <img className="rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </Link>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg text-center mt-4">{movie.title}</p>
                        <p className="text-lg text-center mt-4">{movie.release_date}</p>
                        <p className="text-lg text-center mt-4">{movie.vote_average}</p>
                        <button className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mt-2 mb-2" onClick={toggleLiked}>
                        {liked ? 'Unlike' : 'Like'}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );

}

