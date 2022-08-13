import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getMovies } from '../movie_data';
import { NavLink } from 'react-router-dom';
// Link대신 NavLink를 사용하면 링크에서 사용하는 경로가
// 현재 라우터의 경로와 일치하는 경우 특정 CSS를 적용가능.

const Movies = () => {
    const movies = getMovies();

    return (
        <div> 
            <h1>넷플릭스 영화 추천 목록</h1>
            <div>
                {movies.map((movie) => (
                    <NavLink 
                    to={`/movies/${movie.id}`} 
                    key={movie.id} 
                    style={({isActive}) => {
                        return {
                            textDecoration: isActive ? "underline" : "",
                            color: isActive ? "#FF9E1B": "",
                        }
                    }}>
                        <p>{movie.title}</p>
                    </NavLink>
                ))}
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Movies;