import { Link } from "react-router-dom";

const SidebarLink = ({ text, to }) => {
  return (
    <Link
      className="w-full text-3xl text-light hover:font-bold hover:text-white"
      to={to}
    >
      {text}
    </Link>
  );
};

export default SidebarLink;
