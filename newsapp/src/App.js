
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
  apikeys="d54a6b242e904f7da0507cf3ef4edc49";
  // apikeys= process.env.REACT_APP_NEWS_API;
  pageSize=5;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  


  render() {
  
    return (
      

      <BrowserRouter>
        <Navbar />
        {/* <LoadingBar color='#f11946' progress={this.state.progress} }/> */}
       
       

        <Routes>
          <Route exact strict path="/" key="home" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="general" />} />

          <Route exact strict path="/about" key="about" element={<About />} />

          <Route exact strict path="/business" key="business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="business" />} />
          <Route exact strict path="/entertainment" key="entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="entertainment" />} />
          <Route exact strict path="/technology" key="technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="technology" />} />
          <Route exact strict path="/sports" key="sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="sports" />} />
          <Route exact strict path="/science" key="science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="science" />} />
          <Route exact strict path="/health" key="health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apikeys={this.apikeys} country="in" category="health" />} />
        </Routes>
        

      </BrowserRouter>

    )
  }
}

