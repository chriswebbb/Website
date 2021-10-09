import React, { Component } from 'react';
import ReactGA from 'react-ga';             //google analytics module
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import CV from './Components/CV';
import Contact from './Components/Contact';
import References from './Components/References';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      portfolioData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getPortfolioData(){
    $.ajax({
      url:'/portfolioData.json',     //This provides the location of the portfolio data
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({portfolioData: data});
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
      <div className="App">
        <Header data={this.state.portfolioData.main}/>
        <About data={this.state.portfolioData.main}/>
        <CV data={this.state.portfolioData.cv}/>
        <Portfolio data={this.state.portfolioData.portfolio}/>
        <References data={this.state.portfolioData.references}/>
        <Contact data={this.state.portfolioData.main}/>
        <Footer data={this.state.portfolioData.main}/>
      </div>
    );
  }
}

export default App;
