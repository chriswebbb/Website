import React, { Component } from 'react';
import ReactGA from 'react-ga';             //google analytics module
import $ from 'jquery';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import CV from './Components/CV';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      portfolioData: {}
    };
    /*
    ReactGA.initialize('UA-110570651-01');
    ReactGA.pageview(window.location.pathname);
    */
  }

  getPortfolioData(){
    $.ajax({
      url:'/portfolioData.json',     //This provides the location of the portfolio data
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({portfolioData: data});
        console.log("got the goods");
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getPortfolioData();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Header data={this.state.portfolioData}/>} />
            <Route path="Portfolio" element={<Portfolio data={this.state.portfolioData}/>} />
            <Route path="Contact" element={<Contact data={this.state.portfolioData}/>} />
            <Route path="CV" element={<CV data={this.state.portfolioData}/>} />
            <Route path="*"  element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }/>
        </Routes>
      </BrowserRouter>
      /*<div className="App">
        <Header data={this.state.portfolioData.main}/>
        <About data={this.state.portfolioData.main}/>
        <CV data={this.state.portfolioData.cv}/>
        <Portfolio data={this.state.portfolioData.portfolio}/>
        <Footer data={this.state.portfolioData.main}/>
      </div>*/
    );
  }
}
/*
<Header data={this.state.portfolioData.main}/>
<About data={this.state.portfolioData.main}/>
<CV data={this.state.portfolioData.cv}/>
<Portfolio data={this.state.portfolioData.portfolio}/>
<References data={this.state.portfolioData.references}/>
<Contact data={this.state.portfolioData.main}/>
<Footer data={this.state.portfolioData.main}/>
*/

export default App;
