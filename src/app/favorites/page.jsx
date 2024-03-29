'use client';
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Page() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMovies() {
            const movies = [];
            for (let i = 0; i < localStorage.length; i++) {
                const id = localStorage.key(i);
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
                );
                const movie = await res.json();
                movies.push(movie);
            }
            setMovies(movies);
            setLoading(false);
        }
        getMovies();
    }, []);

    if (loading) return <div className="text-4xl text-center text-teal-500 mt-8 mb-8">Loading...</div>;

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl mb-8 mt-8 font-bold text-teal-400 text-center">Favorites</h1>
            {movies.length === 0 ? (
                <div className="text-2xl text-center text-yellow-500 mt-8 mb-8">Like some movies from the catalogue to view them here</div>
            ) : (
                <div className="grid grid-cols-5 gap-4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}