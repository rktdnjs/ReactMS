import {
    HeaderDiv,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
    CursorDiv
} from './styledComponent';

import {
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header({darkMode, setDarkMode}) {
    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
    }
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }
  return (
    <HeaderDiv>
        <TitleLogoDiv onClick={goHome}>
            <TitleBig>멋사</TitleBig>
            <TitleSmall>익명게시판</TitleSmall>
        </TitleLogoDiv>
        <SubHeaderDiv>
            {darkMode ? (
                <div>
                    <CursorDiv><FontAwesomeIcon onClick={toggleDarkMode} icon={faSun}/></CursorDiv>
                </div>
            ) : (
                <div>
                    <CursorDiv><FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon}/></CursorDiv>
                    </div>
            )}
        </SubHeaderDiv>
    </HeaderDiv>
  )
}

export default Header