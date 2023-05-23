function Style_card({
  description,
  style,
  imageURL = "https://placehold.co/865x543",
}) {
  return (
    <div className="Style_card_wrapper">
      <div className="Style_card_picture">
        <img src={imageURL} />
      </div>
      <div className="description_box_wrapper">
        <div className="description_wrapper">
          <h3>{style}</h3>
          <div className="Style"> {description}</div>
        </div>
      </div>
    </div>
  );
}

export default Style_card;
