import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var cvDownoad = this.props.data.cvDownoad;
    }

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
       })
     }


    return (

      <section id="about">
      <nav>
         <ul>
            <li>
               <Link to="/">HOME</Link>
            </li>
            <li>
               <Link to="/Portfolio">WORK</Link>
            </li>
            <li>
               <Link to="/CV">SKILL</Link>
            </li>
         </ul>
         <div id="navi_contact">
            <Link to="/Contact">CONTACT</Link>
         </div>
      </nav>  
      <div className="row">
         <div className="twelve columns">
            <h2><span>Info</span></h2>
         </div>

         <div className="eight columns offset-t-1-9 main-col">
            <div className="row">
               <div className="three columns contact-details">
                  <h2>CONTACT INFO</h2>
               </div>
               <div className = "nine columns">
                  <p className="address">
                     {email}
					   </p>
               </div>
            </div>
            <div className="row">
               <div className="three columns">
                  <h2>ABOUT ME</h2>
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
    );
  }
}

export default About;
