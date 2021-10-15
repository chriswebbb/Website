import React, { Component } from 'react';

var TxtType = function(el, toRotate, period) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 2000;
   this.txt = '';
   this.tick();
   this.isDeleting = false;
};

TxtType.prototype.tick = function() {
   var i = this.loopNum % this.toRotate.length;
   var fullTxt = this.toRotate[i];

   if (this.isDeleting) {
   this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
   this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

   var that = this;
   var delta = 200 - Math.random() * 100;

   if (this.isDeleting) { delta /= 2; }

   if (!this.isDeleting && this.txt === fullTxt) {
   delta = this.period;
   this.isDeleting = true;
   } else if (this.isDeleting && this.txt === '') {
   this.isDeleting = false;
   this.loopNum++;
   delta = 500;
   }

   setTimeout(function() {
   that.tick();
   }, delta);
};

window.onload = function() {
   var elements = document.getElementsByClassName('typewrite');
   for (var i=0; i<elements.length; i++) {
       var toRotate = elements[i].getAttribute('data-type');
       var period = elements[i].getAttribute('data-period');
       if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period);
       }
   }
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
   document.body.appendChild(css);
};

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#cv">CV</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">References</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>


      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Christian.", "An Electrical and Electronic engineer.", "This is my online portfolio." ]'>
               <span class="wrap"></span>
            </h1>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}
/*
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
export default Header;
