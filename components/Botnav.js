function Botnav({
  title,
  imageURL1 = "/img/Facebook.svg",
  imageURL2 = "/img/Twitter.svg",
  imageURL3 = "/img/Instagram.svg",
}) {
  return (
    <div className="Botnav_wrapper">
      <div className="Card_line"></div>
      <div className="Contact_wrap">
        <div className="Explore">
          <h1>Explore</h1>
          <h2>Room Size</h2>
          <h3>Style</h3>
        </div>
        <div className="Contact">
          <h1>Contact</h1>
          <h2>call +66 928335555</h2>
          <h3>Email Dektang.hor@gmail.com</h3>
          <h4>Follow @Dektanghor</h4>
        </div>
        <div className="Follow_Us">
          <h1>Follow US</h1>
          <div className="Follow_Us_icon_wrapper">
            <img src={imageURL1} className="/img/Facebook.svg" />
            <img src={imageURL2} className="/img/Twitter.svg" />
            <img src={imageURL3} className="/img/Instagram.svg" />
          </div>
        </div>
        <div className="Dektanghor_Guarantee">
          <h1>Dektanghor Guarantee</h1>
          If you're not happy with our design, we're not happy. We work
          tirelessly to make sure your Havenly design experience is delightful.
          That's why we offer the Havenly Happiness Guarantee.
        </div>
      </div>
      <div className="Card_line"></div>
      <div className="bot_wrapper">
        <div className="left"> 2023 Havenly Inc., All Rights Reserved. </div>
        <div className="right">
          | Privacy Policy | Terms of Service | Do Not Sell My Personal
          Information |
        </div>
      </div>
    </div>
  );
}

export default Botnav;
