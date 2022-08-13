import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../movie_data';

const Movie = () => {
    //URL 파라미터 사용, useParams가 URL 파라미터를 조회해줌
    const params = useParams();
    console.log(params);

    // 주의할점. 파라미터의 값이 문자열이기 때문에 숫자로 반드시 바꾸어주어야 함
    const movie = getMovie(parseInt(params.movieId));
    console.log(movie);

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>감독 : {movie.director}</p>
            <p>카테고리 : {movie.category}</p>
        </div>
    );
};

export default Movie;