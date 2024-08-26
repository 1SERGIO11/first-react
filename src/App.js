import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs/>} />
            <Route path='/profile' element={<Profile posts={props.posts}/>} />  
            <Route path="/news/*" element = {<News/>}/>
            <Route path="/music/*" element = {<Music/>}/>
            <Route path="/settings/*" element = {<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
