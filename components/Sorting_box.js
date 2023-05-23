function Sorting_box({
  title,
  style,
  roomsize,
  imageURL = "https://placehold.co/420x280",
}) {
  return (
    <div className="Sorting_wrapper">
      {/* <div className="card_picture"> */}
      <div className="Search_wrapper">
        <div className="Text_Icon_Wrapper">
          <div className="Icon">
            <img src="/img/search_icon.svg" />
          </div>
          <div className="Text">Search for peoperties </div>
        </div>
        <div className="Search_button"> Search </div>
      </div>
      <div className="Roomsize_wrapper">
        <div className="Left_wrapper">
          <div className="Icon_left">
            <img src="/img/Room_size_icon.svg" />
          </div>
          <div className="Roomsize"> Roomsize </div>
        </div>
        <div className="Icon_Right">
          <img src="/img/Drop_icon.svg" />
        </div>
      </div>
      <div className="Style_wrapper">
        <div className="Left_wrapper">
          <div className="Icon_left">
            <img src="/img/Style_icon.svg" />
          </div>
          <div className="Style"> Style </div>
        </div>
        <div className="Icon_Right">
          <img src="/img/Drop_icon.svg" />
        </div>
      </div>
    </div>
  );
}

export default Sorting_box;
