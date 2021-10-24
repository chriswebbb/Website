import React, { Component } from 'react';
import {SiNpm, SiCoursera, SiCplusplus, SiPython, SiAutodesk, SiJavascript, SiNodedotjs, SiReact, SiWolfram, SiOpengl, SiBlender, SiCss3} from 'react-icons/si';
import {ImEmbed2} from 'react-icons/im';

class CV extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
    <section id="cv">

      

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


      <div className="row work">

         <div className="two columns header-col">
            <h1>Work Experience</h1>
         </div>

         <div className="ten columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">

        <div className="two columns header-col">
            <h1>Skills</h1>
         </div>

        <div className="ten columns main-col">

            <p>{skillmessage}
            </p>
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
                <SiOpengl title="OpenGL"/>
              </div>
              <div className="columns">
                <SiCss3 title="css"/>
              </div>     
              <div className="columns">
                <SiNpm title="NPM"/>
              </div>     
            </div>
          </div>

          <h1>Software
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
          </div>

			  </div>
      </div>
    </section>
    );
  }
}

export default CV;