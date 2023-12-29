const Title = ({ title, className = "text-dark bg-white" }) => {
  return <h1 className={`text-4xl ${className}`}>{title}</h1>;
};

export default Title;
