function Topnav({ link }) {
  return (
    <div className="Nav_wrapper">
      <div className="Nav_logo_wrap">
        <div className="Nav_logo">
          {" "}
          <a href={link}>
            <img src="/img/Logo.svg" />
          </a>
        </div>
        <div className="Nav_logo_text">
          {" "}
          <a href={link}> DTH </a>
        </div>
      </div>
      <div className="Roomsize_Style">
        <div className="Roomsize"> Room Size</div>
        <div className="Line"> I </div>
        <div className="Style"> Style</div>
      </div>
      <div className="Start_Exploring">Start Exploring </div>
    </div>
  );
}
export default Topnav;
