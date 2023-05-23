function Card_horizontal({
  title,
  description,
  style,
  roomsize,
  roomsize_x1,
  roomsize_x2,
  roomsize_x3,
  imageURL = "https://placehold.co/800x320",
}) {
  return (
    <div className="card_horizontal_wrapper">
      <div className="card_picture">
        <img src={imageURL} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className="Card_line"></div>
        <div className="Room_size_wrapper">
          <div className="roomsize_x"> {roomsize_x1}</div>
          <div className="roomsize_x"> {roomsize_x2}</div>
          <div className="roomsize_x"> {roomsize_x3}</div>
        </div>
      </div>
    </div>
  );
}
export default Card_horizontal;
