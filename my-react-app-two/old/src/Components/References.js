import React, { Component } from 'react';

class References extends Component {
  render() {

    if(this.props.data){
      var references = this.props.data.references.map(function(references){
        return  <li key={references.user}>
            <blockquote>
               <p>{references.text}</p>
               <cite>{references.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="references">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client References</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {references}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default References;
