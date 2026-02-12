import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <div className="skills">
        <div className="skill">
          <i className="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>

        <div className="skill">
          <i className="fa-brands fa-css3-alt"></i>
          <span>CSS</span>
        </div>

        <div className="skill">
          <i className="fa-brands fa-git-alt"></i>
          <span>Git</span>
        </div>

        <div className="skill">
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
        </div>

        <div className="skill">
          <i className="fa-brands fa-docker"></i>
          <span>Docker</span>
        </div>

        <div className="skill">
          <i className="fa-solid fa-cloud"></i>
          <span>Cloud Basics</span>
        </div>
      </div>
    </section>
  )
}

export default Skills
