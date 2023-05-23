function Pic_show({
  imageURL1 = "https://placehold.co/420x280",
  imageURL2 = "https://placehold.co/420x280",
  imageURL3 = "https://placehold.co/420x280",
  imageURL4 = "https://placehold.co/420x280",
}) {
  return (
    <div className="Pic_show_wrapper">
      <div className="Pic_show_wrapper_Left">
        <img src={imageURL1} />
        <img src={imageURL2} />
      </div>
      <div className="Pic_show_wrapper_Right">
        <img src={imageURL3} />
        <img src={imageURL4} />
      </div>
    </div>
  );
}

export default Pic_show;
