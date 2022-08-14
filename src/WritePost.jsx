import React, { useState } from 'react';
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from './styledComponent';
import WriteTitle from './WriteTitle';
import InputPost from './InputPost';

const SubmitComponent = React.memo(() => (
    <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
    </PostSubmitDiv>
));

const WritePost = () => {
    const [inputs, setInputs]= useState({
        title:'',
        contents:'',
    });
    const { title, contents } = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        console.log(e.target.value + " " +  e.target.name);
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
      <WriteTitle/>
      <PostWriteDiv>
        <InputPost onChange={onChange} title={title} content={contents}/>
      </PostWriteDiv>
      <SubmitComponent/>
    </PostSection>
  );
}

export default WritePost;