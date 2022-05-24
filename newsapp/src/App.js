
import './App.css';
// news api key d54a6b242e1204f7da0507cf3ef4edc412

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  pageSize=4;

  render() {

    return (

      <BrowserRouter>
        <Navbar />
        

        <Routes>
          <Route exact strict path="/" key="home" element={<News pageSize={this.pageSize} country="in" category="general" />} />

          <Route exact strict path="/about" key="about" element={<About />} />

          <Route exact strict path="/business" key="business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
          <Route exact strict path="/entertainment" key="entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route exact strict path="/technology" key="technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />
          <Route exact strict path="/sports" key="sports" element={<News pageSize={this.pageSize} country="in" category="sportsgeneral" />} />
          <Route exact strict path="/science" key="science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
          <Route exact strict path="/health" key="health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
        </Routes>
        

      </BrowserRouter>

    )
  }
}

