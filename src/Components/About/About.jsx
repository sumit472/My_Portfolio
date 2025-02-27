import "../About/About.css";
import home from "../Home/Home.png";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={home} alt="" height={"460"} />
        </div>
        <div className="about-right">
          <div className="text">
            <h2>ABOUT ME</h2>
            <p>
              What to write for an about me? A simple bio with concrete facts
              goes a long way. Tell us who you are, where you're from (if it
              matters to you), where you live, and what you do. And if you have
              a photo or video of yourself you want to share, make a note to
              include that. Share your experience. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis veritatis, optio
              consequatur, quam eveniet nobis ea corporis in eum voluptates odio
              ex architecto sit perferendis laborum libero ipsam? Asperiores,
              aperiam? Quaerat, quo quam quas ipsam quibusdam culpa? Accusantium
              ipsum vitae, incidunt ea atque alias rem ex, architecto soluta
              mollitia dignissimos, quo laboriosam ad explicabo recusandae
              aliquid deleniti odio veniam? Totam. Laboriosam tempora odio
              voluptate aut ad ratione consequuntur dolore quae. Aliquid sed
              quaerat quia perspiciatis voluptatem odit temporibus velit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
