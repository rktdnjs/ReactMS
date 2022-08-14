import React from 'react'
import {
    ContentsInput,
    TitleInput,
  } from './styledComponent';
import { useRef } from 'react';
import { useEffect } from 'react';

const InputPost = ({onChange, contents, title}) => {
    // useRef를 통해서 연결을 시켜놓고, useEffect를 통해서 렌더링 될 경우
    // 해당 컴포넌트에 포커싱 해달라고 작성해놓은 모습이다.
    const titleInput = useRef();
    const contentsInput = useRef();
    useEffect(() => {
        titleInput.current.focus();
    }, []);

    const onKeyUp = (e) => {
        if(e.key == 'Enter') {
            contentsInput.current.focus();
        }
    }

  return (
    <>
        <TitleInput 
        name='title' 
        value={title} 
        onChange={onChange}
        placeholder="제목을 입력해주세요. (15자 이내)" 
        ref={titleInput}
        onKeyUp={onKeyUp}/>
        <ContentsInput 
        name='contents' 
        value={contents} 
        onChange={onChange}
        cols="30" 
        rows="10"
        ref={contentsInput}/>
    </>
  )
}

export default InputPost