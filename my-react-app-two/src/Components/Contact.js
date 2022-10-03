import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {

    if(this.props.data.main){
      var name = this.props.data.main.name;
      var phone= this.props.data.main.phone;
      var email = this.props.data.main.email;
      var message = this.props.data.main.contactmessage;
      var networks= this.props.data.main.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <section id="contact">
         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch you golywog.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_news">
                  <h4 className="widget-title">Latest News</h4>
                  <ul id="news">
                     <li>
                        <span>
                        I eat ass<br/>
                        <a href="https://www.youtube.com/watch?v=Q1lSiXZpoGM&ab_channel=TVFilthyFrank"> CLICK ME</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        YEET<br/>
                        <a href="https://www.youtube.com/watch?v=2Bjy5YQ5xPc&ab_channel=Regentpuppies49"> CLICK ME WHORE</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
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
   </section>
    );
  }
}

export default Contact;