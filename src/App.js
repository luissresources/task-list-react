import React from 'react';
import './App.css';
import Logo from './componentes/Logo';
import TaskList from './componentes/TaskList';
import imagenLogo from './imagenes/logo.png'

function App() {

  return (
    <div className="App container">
      <Logo 
        logo = {imagenLogo} />
      <div className='task-app'>
        <h1 className='task-app__title'>Task List</h1>
        < TaskList />
      </div>
    </div>  
  );
}

export default App;
