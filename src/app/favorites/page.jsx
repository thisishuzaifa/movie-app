'use client';
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Page() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //get liked movies from local storage
        async function getMovies() {
            const movies = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const movie = JSON.stringify(localStorage.getItem(key));
                movies.push(movie);

            }
            setMovies(movies);
            setLoading(false);
        }
        getMovies();
    }
    , []);

    return (

        <div className="container mx-auto">
            <h1 className="text-4xl mt-8 font-bold text-teal-400 text-center">Favorites</h1>
           <div className="grid grid-cols-5 gap-4">
                {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
        </div>
    );
}

            