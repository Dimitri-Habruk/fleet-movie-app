import { createContext, useState } from "react";

export const MovieContext = createContext({

    emptyList: false,
    setEmptyList: () => {},
    movies: [],
    setMovies: () => {},
    movieId: '',
    setMovieId: () => {},

})

export const MovieController = (props)=>{
    const [movies, setMovies] = useState(null)
    const [emptyList, setEmptyList] = useState(false)
    const [movieId, setMovieId] = useState('')


    return (
        <MovieContext.Provider 
        value={{
            movies,
            setMovies:(newMovies) => setMovies(newMovies),
            emptyList,
            setEmptyList,
            movieId,
            setMovieId:(newMovieId) => setMovieId(newMovieId)
            }}
        >
        {props.children}
        </MovieContext.Provider>
    )
}