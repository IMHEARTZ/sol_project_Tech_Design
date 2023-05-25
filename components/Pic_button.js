function Pic_button({
  imageURL1 = "https://placehold.co/420x280",
}) {
  return (
    <div className="Pic_button_wrapper">
      <div className="Pic_button_wrapper">
        <img src={imageURL1} />
      </div>
      <div className="Pic_button_button"></div>
    </div>
  );
}

export default Pic_button;
