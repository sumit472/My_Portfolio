import html from '../Skill/html.png'
import css from '../Skill/css.png'
import jsImg from '../Skill/js.jpeg'
import reactImg from '../Skill/react.png'
import express from '../Skill/express.png'
import nodeJs from '../Skill/node.png'
import mongoDb from '../Skill/mongo.png'
import dataSql from '../Skill/sql.jpg'
import './skill.css'
const Skill = () => {
  return (
    <>
      <div className="skills">
        <h1>My Skill</h1>
        <div className="skill-part">
          <div className="html">
            <img src={html} alt="" height={"100px"} />
          </div>
          <div className="html">
            <img src={css} alt="" height={"100px"} />
          </div>
          <div className="html">
            <img src={jsImg} alt="" height={"100px"} />
          </div>
          <div className="html">
            <img src={reactImg} alt="" height={"100px"} />
          </div>
        </div>
        <div className="skill-part-2">
          <div className="html">
            <img src={nodeJs} alt="" height={"100px"} />
          </div>
          <div className="html">
            <img src={express} alt="" height={"100px"} />
          </div>
          <div className="html">
            <img src={mongoDb} alt="" height={"100px"} />
          </div>
          <div className="html">
            <img src={dataSql} alt="" height={"100px"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Skill;
