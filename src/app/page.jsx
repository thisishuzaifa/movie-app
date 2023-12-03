'use client'; 
import { useEffect, useState } from "react";
import MovieCard from "../app/components/MovieCard";


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      setMovies(data.results);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
}, []);

  return (
    <div className="container max-w-6xl mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}