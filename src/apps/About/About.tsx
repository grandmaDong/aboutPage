import React from 'react'

export const About = () => {
  return (
    <div className="about-page">
      <div className="introduce-myself">
        <h4>简介</h4>
        <div className="portal"></div>
        <div className="motto">Now is Good!</div>
        <div className="name">NAME: Miss.Do</div>
        <div className="email">EMAIL: 1234567@qq.com</div>
      </div>
      <div className="skill-list">
        <div className="title">技能</div>
        <div className="skill-content">
          <div className="skill-item">
            <div className="l-skill-name">
              <div className="t-name">javaScript</div>
              <div className="b-percent">50%</div>
            </div>
            <div className="r-skill-percent">
              <div className="handle-percent"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="l-skill-name">
            <div className="t-name">MySql</div>
              <div className="b-percent">50%</div>
            </div>
            <div className="r-skill-percent"></div>
          </div>

          <div className="skill-item">
            <div className="l-skill-name">
              <div className="t-name">Java</div>
              <div className="b-percent">50%</div>
            </div>
            <div className="r-skill-percent"></div>
          </div>

          <div className="skill-item">
            <div className="l-skill-name">
              <div className="t-name">React</div>
              <div className="b-percent">50%</div>
            </div>
            <div className="r-skill-percent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}