'use client';
import Link from 'next/link';


export default function Header() {    
    return (
            <>
            <h1 className="text-7xl font-bold text-center mt-4 p-2 text-teal-500">tMDB Movie</h1>
            <nav className="flex flex-row justify-center space-x-6 p4 text-teal-600">
                <Link href="/">
                    Home
                </Link>
                <Link href="/top">
                    Top Movies
                </Link>
                <Link href="/now-playing">
                    Now Playing
                </Link>
                <Link href="/upcoming">
                    Upcoming
                </Link>
                <Link href="/favorites">
                    Favorites
                </Link>
            </nav>
            </>
            
);
}
