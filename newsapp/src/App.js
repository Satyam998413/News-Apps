
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize=5;
  // apikeys1= process.env.REACT_APP_NEWS_API;
  
  apikeys="d54a6b242e904f7da0507cf3ef4edc49";

  render() {
  
    return (
      

      <BrowserRouter>
        <Navbar />
        {/* <LoadingBar color='#f11946' progress={10} onLoaderFinished={() => setProgress(0)} }/> */}
       

        <Routes>
          <Route exact strict path="/" key="home" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="general" />} />

          <Route exact strict path="/about" key="about" element={<About />} />

          <Route exact strict path="/business" key="business" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="business" />} />
          <Route exact strict path="/entertainment" key="entertainment" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="entertainment" />} />
          <Route exact strict path="/technology" key="technology" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="technology" />} />
          <Route exact strict path="/sports" key="sports" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="sports" />} />
          <Route exact strict path="/science" key="science" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="science" />} />
          <Route exact strict path="/health" key="health" element={<News pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="health" />} />
        </Routes>
        

      </BrowserRouter>

    )
  }
}

