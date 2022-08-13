import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../movie_data';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movie = () => {
    //URL 파라미터 사용, useParams가 URL 파라미터를 조회해줌
    const params = useParams();
    // console.log(params);

    // 주의할점. 파라미터의 값이 문자열이기 때문에 숫자로 반드시 바꾸어주어야 함
    const movie = getMovie(parseInt(params.movieId));
    // console.log(movie);

    // 쿼리 스트링 사용하기, 이를 파싱할때는 useSearchParams 훅을 사용함
    const location = useLocation();
    // console.log(location);

    const [searchParams, setSearchParams] = useSearchParams();
    const detail =searchParams.get("detail");

    const handleClick = () => {
        // setSearchParams의 detail의 값이 true면 false로 , false면 true로 변경함
        setSearchParams({detail: detail === "true" ? false : true});
        console.log(detail);
    }
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>감독 : {movie.director}</p>
            <p>카테고리 : {movie.category}</p>
            <button type='button' onClick={handleClick}>자세히 보기</button>
            {detail === "true" ? <p>{movie.detail}</p> : ""}
        </div>
    );
};

export default Movie;