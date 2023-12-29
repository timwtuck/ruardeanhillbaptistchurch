const MemberPhoto = ({ image, name, description }) => {
  return (
    <div className="flex flex-col items-center p-10">
      <img className="rounded-full w-40 h-40 object-cover" src={image} />
      <p className="text-lg text-light">{name}</p>
      <p className="text-base text-white">{description}</p>
    </div>
  );
};

export default MemberPhoto;
