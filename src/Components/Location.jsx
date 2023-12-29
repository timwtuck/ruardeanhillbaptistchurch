import Title from "./Title";

const Location = () => {
  return (
    <div className="flex flex-col bg-medium">
      <Title className="text-verydark mt-5" title="How to find us" />
      <div className="flex flex-col sm:flex-row m-10 min-h:1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1232.325657846739!2d-2.5298262977541897!3d51.84906346837102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871af98b8e5ff63%3A0x9c84f3dd31737d6d!2sRuardean%20Hill%20Baptist%20Chapel!5e0!3m2!1sen!2suk!4v1703850936002!5m2!1sen!2suk"
          width="100%"
          height="400px"
          style={{
            border: "2px",
            borderStyle: "solid",
            borderColor: "#557c55",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-verydark flex flex-col text-left m-10 sm:m-5">
          <p>Where are located somewhere in some place bla bla bla bla</p>
          <p className="mt-5">
            Something something, some more text here explaining something
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
