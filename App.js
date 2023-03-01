import React, {useState} from 'react';
import './App.css';

function App() {

  var [str,setStr] = useState(" vai!");

  function handleClick(){
    setStr("foi");
  }

  return (
    <div className="App">
      <div id='neta'>
        <main>
          <h2>{str}</h2>
          <h1>Login</h1>
          <h2>aaaaa</h2>
          <div id='meiodologin'>
            <input type="text"placeholder='Email'></input>
            <input type="text" id="valor1" placeholder='Senha'></input><br></br>
            <button id="cadatre-se" onClick={()=>handleClick()}>Cadastre-se </button> 
            <button id= 'entrar' onClick={()=>handleClick()}>entra</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
