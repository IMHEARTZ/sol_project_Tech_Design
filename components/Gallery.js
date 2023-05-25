function Gallery({
  tittle = "Gallery",
  imageURL1 = "https://placehold.co/424x424",
  imageURL2 = "https://placehold.co/424x424",
  imageURL3 = "https://placehold.co/424x424",
  imageURL4 = "https://placehold.co/424x424",
}) {
  return (
    <div className="Gallery_wrapper">
      <div className="Gallery_Heading"> Gallery</div>
      <div className="Gallery_pic_wrapper">
        <img src={imageURL1} />
        <img src={imageURL2} />
        <img src={imageURL3} />
        <img src={imageURL4} />
      </div>
    </div>
  );
}
export default Gallery;
