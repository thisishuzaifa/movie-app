'use client';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';


export default function Page() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
            );
            const movies = await res.json();
            setMovies(movies.results);
            setLoading(false);
        };
        getMovies();
    }
    , []);
    

    return (
    <div className="container mx-auto">
    <h1 className="text-4xl mt-8 font-bold text-teal-400 mb-8 text-center">Upcoming Movies</h1>
      <div className="grid grid-cols-5 gap-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    );
}
  