import React from 'react'
import myimg from "../assets/myimg.jpeg"  

const Home = () => {
  return (
    <section className="hero">
      <img src={myimg} alt="Rishabh" />

      <h2>
        Hi, I'm <span>Rishabh Saini</span>
      </h2>

      <p>
        A passionate learner who builds clean and user-friendly websites using HTML
        and CSS. Currently learning DevOps fundamentals.
      </p>
    </section>
  )
}

export default Home
