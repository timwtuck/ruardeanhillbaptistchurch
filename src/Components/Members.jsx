import grace from "../images/people/grace-fake.jpg";
import bar from "../images/people/bar-fake.jpg";
import mir from "../images/people/mir-fake.png";
import MemberPhoto from "./MemberPhoto";
import Title from "./Title";

const Members = () => {
  return (
    <div className="flex flex-col bg-dark p-10">
      <Title title="Members" className="text-white" />
      <div className="flex flex-row flex-wrap justify-evenly">
        <MemberPhoto
          image={grace}
          name="Grace Tucker"
          description="Church leader and general bad ass"
        />
        <MemberPhoto
          image={bar}
          name="Barbara Wright"
          description="Hardest worker award, most reliable"
        />
        <MemberPhoto
          image={mir}
          name="Mirium Taylor"
          description="Church secretary and regular"
        />
      </div>
    </div>
  );
};

export default Members;
