import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="grid-style portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            <p className="portfolio-text">{projects.description}</p>
            </a>
          </div>  
        </div>
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
          <h1><span>Projects</span></h1>
          </div>
          <div className="twelve columns">
          <div id="portfolio-wrapper" className="grid-container bgrid-quarters s-bgrid-thirds">
              {projects}
          </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Portfolio;
