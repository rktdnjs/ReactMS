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

function Header({darkMode, setDarkMode}) {
    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
    }
  return (
    <HeaderDiv>
        <TitleLogoDiv>
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