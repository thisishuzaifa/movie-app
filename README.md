## tMDB Movie Application

1. Create a new project using create-next-app by using the following command:

```bash
npx create-next-app tmdb-movie-app
```
2. Follow the command line prompts to create a new project.
3. Add tailwind css if you wish to use it.
4. Register for a free account at https://www.themoviedb.org/ and get an API key.
5. Create a .env.local file in the root of your project and add the following:

```bash
NEXT_PUBLIC_TMDB_API_KEY=YOUR_API_KEY
```
6. Start the development server by running the following command:

```bash
npm run dev
```
7. Open http://localhost:3000 with your browser to see the result.

## Project requirements

1. Create components for the following aspects of your app:
    1. Header
    2. Footer
    3. Movie Card
    4. Favorite Movie Button

2. Create a page for the following aspects of your app:
    1. Home Page, which will display a list of movies that are popular now.
    2. Now-Playing Page, which will display a list of movies that are now playing.
    3. Top Rated Page, which will display a list of movies that are top rated.
    4. Upcoming Page, which will display a list of movies that are upcoming.
    5. Favorites Page, which will display a list of movies that are favorited.

3. Use Local Storage to store the list of favorited movies.

4. On any page, when a user clicks on a movie card, they should be taken to a movie details page.

5. On the movie details page, the user should also be able to favorite the movie.
