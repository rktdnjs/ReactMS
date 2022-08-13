import {
    Main,
    MediaDiv,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Header from './Header';
import Slogan from './Slogan';
import ShowPostList from './ShowPostList';
import Footer from './Footer';

function App() {
    const initialPostList = [
        {id:1, title:'학보, 시사N 대학기자상 취재', replCount:1},
        {id:1, title:'학보, 시사N 대학기자상 취재', replCount:43},
        {id:1, title:'학보, 시사N 대학기자상 취재', replCount:2},
    ]
    const [postList, setPostList] = useState(initialPostList);
    const addPost = () => {
        setPostList((postList) => [
            ...postList, {id:4, title:'학보, 시사N 대학기자상 취재', replCount:21},
        ])
    }
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost,setIsPost] = useState(false);

    return (
        <>  
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
            <GlobalStyles/>
            <MediaDiv>
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Main>
                    <Slogan/>
                    <ShowPostList 
                    loading={loading}
                    isPost={isPost}
                    postList={postList}
                    addPost={addPost}
                    />
                </Main>
                <Footer/>
            </MediaDiv>
        </ThemeProvider>
        </>
    );
}

export default App;
