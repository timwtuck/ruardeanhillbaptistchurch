import Title from "./Title";
import image from "../images/ruardean-church.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-row p-10 bg-light">
      <div className="flex flex-col p-5 text-dark text-left">
        <Title title="About us" className="text-dark" />
        <p className="mt-5">Where are some people in the forest</p>
        <p className="mt-5">
          I have more to say but I should ask someone else first
        </p>
        <p className="mt-5">
          mainly because I had no idea what I should write here
        </p>
      </div>
      <img className="w-2/5" src={image} />
    </div>
  );
};

export default AboutUs;
