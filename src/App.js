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

function App() {
  function handleClick(str) {
    return () => {
      alert(str);
    }
  }

  const [count, setCount] = useState(100);

  const [text, setText] = useState('');

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
        <p>{count}</p>
      
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <p>입력된 값 : {text}</p>
    </div>
  );
}

export default App;
