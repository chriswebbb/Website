import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ThreeDApp from './ThreeDApp';
import {SiNpm, SiCoursera, SiCplusplus, SiPython, SiAutodesk, SiJavascript, SiNodedotjs, SiReact, SiWolfram, SiOpengl, SiBlender, SiCss3} from 'react-icons/si';
import {ImEmbed2} from 'react-icons/im';

class Header extends Component {
  render() {

    if(this.props.data.main){
      var name = this.props.data.main.name;
      var occupation= this.props.data.main.occupation;
      var description= this.props.data.main.description;
      // var city= this.props.data.address.city;
      var profilepic= "images/"+this.props.data.main.image;
      var bio = this.props.data.main.bio;
      //var street = this.props.data.address.street;
     //var city = this.props.data.address.city;
      //var state = this.props.data.address.state;
      //var zip = this.props.data.address.zip;
      //var phone= this.props.data.phone;
      //var email = this.props.data.email;
      var cvDownoad = this.props.data.main.cvDownoad;
      //var skillmessage = this.props.data.skillmessage;
      var networks= this.props.data.main.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })

      var skillmessage = this.props.data.cv.skillmessage;
      var education = this.props.data.cv.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
    }

    return (
   <div>
      <section id="splash">
         <div id="webGlBack">
            <ThreeDApp/>
         </div>
      </section>

      <section id="about">
         <div className="row">
            <div className="twelve columns">
               <h2><span>who</span></h2>
            </div>

            <div className="eight columns offset-t-1-9 main-col">
               <div className="row">
               </div>
               <div className="row">
                  <div className="three columns">
                     <h2>ABOUT ME {name}</h2>
                  </div>
                  <div className="nine columns">
                     <p>{bio}</p>
                  </div>
                  <div className="columns download">
                  </div>
               </div>            
            </div>

            <div className="four offset-t-1-9 columns ">
               <img className="profile-pic"  src={profilepic} alt="Profile Pic isn't loading" />
               <div className="main-col">
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
               <div className="download">
                     <p>
                        <a href={cvDownoad} className="button"><i className="fa fa-download"></i>Download CV</a>
                     </p>
                  </div>
            </div>
         </div>
      </section>

      <section id="cv">
      <h1><span>what</span></h1>
      I can do these tings init fam, like do you get me init.
      <h1>Programming languages
            </h1>

          <div className="icons row">
            <div className="overlay">
              <div className="columns">
                <SiCoursera title="C"/>
              </div>
              <div className="columns">
                <SiCplusplus title="C++"/>
              </div>            
              <div className="columns">
                <ImEmbed2 title="Embedded Programming"/>
              </div>
              <div className="columns">
                <SiPython title="Python"/>
              </div>
              <div className="columns">
                <SiJavascript title="JavaScript"/>
              </div>
              <div className="columns">
                <SiNodedotjs title="Node.JS"/>
              </div>
              <div className="columns">
                <SiReact title="React"/>
              </div>

              <div className="columns">
                <SiCss3 title="css"/>
              </div>     
              <div className="columns">
                <SiNpm title="NPM"/>
              </div>     
            </div>
          </div>

          <h1>Software/APIs
            </h1>

          <div className="icons row">
            <div className="columns">
              <SiAutodesk title="AutoDesk"/>
            </div>
            <div className="columns">
                <SiWolfram title="Mathematica"/>
            </div>
            <div className="columns">
              <SiBlender title="Blender"/>
            </div> 
            <div className="columns">
              <SiOpengl title="OpenGL"/>
            </div>
          </div>
      </section>

      <section id="where">
         <h1><span>where</span></h1>
         <div className="row education">
        <div className="columns twelve">
          <h1><span>Curriculum Vitae</span></h1>
        </div>
        <div className="two columns header-col">
          <h1>Education</h1>
        </div>

        <div className="ten columns main-col">
          <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
          </div>
        </div>
      </div>
         
      </section>

      <nav>
         <ul id="navi_route">
            <li>
               <Link to="/">CW</Link>
            </li>
            <li>
               <Link to="/Portfolio">PROJECTS</Link>
            </li>
            <li>
               <Link to="/Contact">CONTACT</Link>
            </li>
         </ul> 
         <ul id="navi_social">
           {networks}
         </ul>
      </nav>
   </div>
    );
  }
}
/*
         <div id="header_content">
            <h3 href="" className="typewrite" data-period="3000" data-type='[ "Hello", "I am Christian", "An Electrical and Electronic Engineer.", "With Experiance In.", "Control Engineering.","Computer Engineering.","Embedded Programming.","Circuit Design and Testing.", "And A Whole List Of Other Things Which You Can Find Below." ]'></h3>               
         </div>
*/
/*
      <!--
      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Info</a></li>
	         <li><a className="smoothscroll" href="#cv">CV</a></li>
            <li><a className="smoothscroll" href="#portfolio">projects</a></li>
         </ul>
      </nav> 
      -->

<div className="row banner">
<div className="banner-text">
   <h1 href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Christian.", "I am an Electrical and Electronic engineer." ]'>
      <span class="wrap"></span>
   </h1>
   <h1 className="responsive-headline"> {name}</h1>
   <h3>An <span>{occupation}</span> based in the UK. 
   <br />{description}.</h3>
   <hr />
   <ul className="social">
      {networks}
   </ul>
</div>
</div>
*/
/* Goes undernearth the banner div
<p className="scrolldown">
<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
</p>*/

export default Header;
