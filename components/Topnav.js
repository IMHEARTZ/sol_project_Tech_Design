function Topnav() {
  return (
    <div className="Nav_wrapper">
      <div className="Nav_logo_wrap">
        <div className="Nav_logo">
          {" "}
          <img src="/img/Logo.svg" />{" "}
        </div>
        <div className="Nav_logo_text"> DTH </div>
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
