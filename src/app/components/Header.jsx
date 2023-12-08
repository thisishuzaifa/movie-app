'use client';
import Link from 'next/link';


export default function Header() {    
    return (
            <>
            <Link href="/" className="hover:border-b-2 hover:border-yellow-500 ">
                
                <h1 className="text-7xl font-bold text-center mt-4 p-2 text-teal-400">tMDB Movie</h1>
                
            </Link>
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
