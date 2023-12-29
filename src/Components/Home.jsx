import NextService from "./NextService";
import Location from "./Location";
import AboutUs from "./AboutUs";
import Members from "./Members";

const Home = () => {
  return (
    <div className="flex flex-col">
      <NextService />
      <AboutUs />
      <Location />
      <Members />
    </div>
  );
};

export default Home;
