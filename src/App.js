import './App.css';
import React from 'react';

import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

import MainPage from './pages/MainPage';
import TabBar from './components/TabBar';
import All from './pages/All';
import Todo from './pages/Todo';
import Inprogress from './pages/Inprogress';
import Done from './pages/Done';
import Header from './components/Header';



function App() {

  const [home, setHome] = useState(true);

  const handleClick = () => {
    setHome(false);
  }

  const HeaderClick = () => {
    setHome(true);
  }


  return (
    <div>
      {/* {home ? null: <Header HeaderClick = {HeaderClick}/>} */}
      <Routes>
        <Route path='/' element={<MainPage/>} />
        {/* <Route path='/all' element={<All/>} /> */}
        <Route path='/todo' element={<Todo/>} />
        <Route path='/inprogress' element={<Inprogress/>} />
        <Route path='/done' element={<Done/>} />
      </Routes>
      <TabBar handleClick = {handleClick}/>
    </div>
  );
}

export default App;
