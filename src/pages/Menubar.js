import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// Outlet을 사용하면 라우터설정이 된 곳에서 하위 컴포넌트의 항목도 보여준다.
// 중첩경로로 설정된 컴포넌트 중 하위 컴포넌트들.
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };

    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
            </ul>
            <button onClick={goHome} type='button'>홈으로 돌아가기</button>
            <Outlet/>
        </div>
    );
};

export default Menubar;