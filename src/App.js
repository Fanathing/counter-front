import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from "./pages/Main";
import Counter from "./pages/Counter"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element= {<Main/>}/>
        <Route path="/counter" element= {<Counter/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
