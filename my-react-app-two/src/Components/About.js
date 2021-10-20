import React, { Component } from 'react';

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

      <div className="row">
         <div className="eight columns offset-t-1-9 main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
                     <span>{email}</span>
					   </p>
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
