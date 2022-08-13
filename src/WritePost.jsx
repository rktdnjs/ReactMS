import React, { useState } from 'react';
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from './styledComponent';

function WritePost() {
    const [inputs, setInputs]= useState({
        title:'',
        contents:'',
    });
    const { title, contents } = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        // console.log(e.target.value + e.target.name);
        setInputs({
            ...inputs,
            [name]:value,
        });
    };
    // 이전 정보를 저장하기 위해서 기존의 inputs를 ...을 통해 유지
    // 그리고 이벤트가 발생할 때 타겟이 되는곳의 name, value를 가져와서
    // setInputs안에 name을 키 값으로 하는 value를 지정해준것이다.

  return (
    <PostSection>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput name='title' value={title} onChange={onChange}
        placeholder="제목을 입력해주세요. (15자 이내)" />
        <ContentsInput name='contents' value={contents} onChange={onChange}
        cols="30" rows="10"></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;