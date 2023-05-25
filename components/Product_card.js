function Product_card({
  title,
  description,
  imageURL = "https://placehold.co/560x280",
}) {
  return (
    <div className="Product_card_wrapper">
      <div className="Product_card_picture">
        <img src={imageURL} />
      </div>
      <div className="description">
        <h4>{title}</h4>
        <a>{description}</a>
        <div className="Card_line"></div>
        <div className="Product_Card_bot_wrapper">
          <div className="Like_icon"> <img src="/img/Like_icon.svg" /></div>
          <div className="See_more"> Seemore </div>
        </div>
      </div>
    </div>
  );
}
export default Product_card;
