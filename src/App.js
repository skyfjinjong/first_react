import logo from './logo.svg';
import './App.css';
import './Custom.css';
import React, { useState } from 'react';

const data = ['apple', 'banana', 'orange'];

function Title({ value1, value2, className, children }) {
  return (
    <>
      <h1>{value1}</h1>
      <h2>{value2}</h2>
      <h3 className={className}>{value2}</h3>
    </>
  )
}

function MyButton(props) {
  return <button style = {{ backgroundColor: "skyblue"}} onClick={props.onMyClick}>
    {props.value}
  </button>
}

function Two({ value }){
  return <div>투: {value}</div>;
}

function One({ value }){
  return (
    <div>
      <Two value={value} />
    </div>
  )
}

function TodoList({data, setArr}) {
  return (
    <div>
      {data.map((v) => (
        <>
          <li key={`${v}-key`}>{v}</li>
          <button onClick={() => {
            setArr(data.filter((f) => f !== v));
          }}>
            삭제
          </button>
        </>
      ))}
    </div>
  )
}

function TodoInput({ text, setText, arr, setArr }){
  return (
    <>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => {
          setText(e.target.value)
        }}/>
      <p>입력된 값 : {text}</p>

      <button
        onClick={() => {
          //arr.push("banana"); // arr은 절대 바뀌면 안된다. 불면성
          
          /*
          const newArr = arr.slice(); // arr deep copy
          newArr.push(text);
          setArr(newArr);
          */
          
          //spread 연산자 방식
          setArr([...arr, text]);
          setText("");
        }}>
        Add value
      </button>
    </>
  )
}

function Todo(){
  const [text, setText] = useState('');
  const [arr, setArr] = useState(["apple"]);

  return (
    <>
    <TodoInput text={text} setText={setText} arr={arr} setArr={setArr}></TodoInput>
    <TodoList data={arr} setArr={setArr} />
    </>
  )
}

function OnlyProps({ data }){
  return <div>{data}입니다.</div>
}

function CompOne(){
  return <h1>첫번째 컴포넌트입니다.</h1>;
}

function CompTwo(){
  return <h1>두번째 컴포넌트입니다.</h1>;
}

function App() {
  function handleClick(str) {
    return () => {
      alert(str);
    }
  }

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Title value1 = "제목1입니당" value2 = "제목2입니당" className="box"/>

      <MyButton value="버튼입니당" onMyClick={() => alert("hi")} />
      <MyButton value="버튼입니당2" onMyClick={() => alert("bye")} />

      <One value="omg~"/>

      <div className = "box">Hello</div>

      <button onClick={handleClick("Hello~!")}>Click me</button>
      
      { data.map((v) => (
        <p>{v}</p>
      ))}

      <button
        onClick ={() => {
          setCount(count + 1);
        }}
        >
        Counter
      </button>
      
      <OnlyProps data={count} />
      <p>{count}</p>

      <Todo />
      
      <p></p>
      <button onClick={() => setShow(!show)}>Show</button>
      {show === false ? <CompOne /> : <CompTwo />}
    </div>
  );
}

export default App;
