import SidebarLink from "./SidebarLink";

const Sidebar = ({ sidebarState, toggleSidebar }) => {
  return (
    <section
      className={`sidebar ${sidebarState ? "sidebar-on" : "sidebar-off"}`}
      onClick={() => toggleSidebar(!sidebarState)}
    >
      <div className="flex flex-row mb-10">
        <button
          className="justify-self-start text-3xl m-3 text-medium hover:text-white"
          onClick={() => toggleSidebar(false)}
        >
          X
        </button>
      </div>
      <SidebarLink to="/home" text="Home" />
      {/*<button>{sidebarState ? "⇦" : "⇨"}</button>
      
      <Link to="/about">Our Story</Link>
      <Link to="/events">Events</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link> */}
    </section>
  );
};

export default Sidebar;
