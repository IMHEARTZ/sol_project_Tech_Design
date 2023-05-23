function Card({
  title,
  style,
  roomsize,
  imageURL = "https://placehold.co/560x280",
}) {
  return (
    <div className="card_wrapper">
      <div className="card_picture">
        <img src={imageURL} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <div className="Card_line"></div>
        <div className="Room-desctiption">
          <div className="Style"> {style}</div>
          <div className="Roomsize"> {roomsize}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
