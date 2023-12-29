import Title from "./Title";
import image from "../images/SFC-Praise-God.jpg";

const NextService = () => {
  return (
    <div className="flex flex-row m-10">
      <img className="w-3/5" src={image} />
      <div className="flex flex-col p-5">
        <Title title="Next Service" />
        <p className="mt-5">Next service is on 3rd January</p>
      </div>
    </div>
  );
};

export default NextService;
