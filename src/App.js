import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function App() {
  return (
    // use lower case for className is for following BEM class naming conversion
    <div className="app"> 
      {/* <h1> hello yizhao </h1> */}
      <Header/>
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
        {/* RecommendedVideos -> <RecommendedVideos /> */}
      </div>   
    </div>
  );
}

export default App;
