import img from "/neha.jpeg";
import './hero.css';
import SparkleText from "./SparkleText";
function Hero() {
  let Name = "Hi! I'm Neha Datha Pradeep ";
  let description = "Crafting Digital experiences that leave a lasting impression";
  return (
    <>
      <div className="hero">
        <div className="text-content">
          {/* <div className="name fadeup"><SparkleText fontSize="3.5rem">{Name}<br/>UI/UX Designer</SparkleText></div> */}
          <div className="name color_text fadeup">{Name}<br/>UI/UX Designer</div>
          <p className="desc fadeup">{description}</p>
          <div className="btns fadeup">
            <a className="button" href="/#projects">
              View Gallery
            </a>
            <a
              className="button"
              href="https://drive.google.com/file/d/1eij8Tb64tsa2tdR3tc4rQjyRgyjy-brk/view?usp=drivesdk"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="content fadeup">
          <img src={img} alt="hero" />
        </div>
      </div>
    </>
  );
}
export default Hero;
