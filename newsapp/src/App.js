
import './App.css';
// news api key d54a6b242e904f7da0507cf3ef4edc49

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
// import {BrowserRouter as Router, Route,Routes} from "react-router-dom";



export default class App extends Component {

  render() {

    return (
      <div>
        {/* <Router> */}
          <Navbar />
          <News pageSize={12} country="in"  category="general"/>
          <About />
          {/* <Routes>
  <Route exact path="/about" key="about" element={<About />} />
  <Route exactpath="/" key="home" element={<News pageSize={9} country="in"  category="general"/>} />
  <Route exactpath="/business" key="business" element={<News pageSize={9} country="in"  category="business"/>} />
  <Route exactpath="/entertainment" key="entertainment" element={<News pageSize={9} country="in"  category="entertainment"/>} />
  <Route exactpath="/technology" key="technology" element={<News pageSize={9} country="in"  category="technology"/>} />
  <Route exactpath="/sports" key="sports" element={<News pageSize={9} country="in"  category="sportsgeneral"/>} />
  <Route exactpath="/science" key="science" element={<News pageSize={9} country="in"  category="science"/>} />
  <Route exactpath="/health" key="" element={<News pageSize={9} country="in"  category="health"/>} />
</Routes> */}

      {/* </Router> */}
      </div >
    )
  }
}

