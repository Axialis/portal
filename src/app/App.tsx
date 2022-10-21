import React from 'react';
import './App.css';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Content } from '../content/Contents';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    </div>

  );
}

export default App;
