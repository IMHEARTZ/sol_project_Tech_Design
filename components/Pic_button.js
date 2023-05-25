function Pic_button({
  // imageURL1 = "https://placehold.co/1890x700",
  imageURL1 = "/img/Room_Detail_3.svg",
}) {
  return (
    <div className="Pic_button_wrapper">
      <div className="Pic_button_pic">
        <img src={imageURL1} />
      </div>
      {/* <div className="Pic_button_button"> */}
      <div className="Button_wrapper">
        <div className="Button_icon_wrap">
          <div className="Button_icon">
            <img src="/img/Search.svg" />
          </div>
          <div className="Button_text"> Browse Product</div>
        </div>
      </div>
      <div className="Pic_button_show_wrapper">
        <div className="Pic_button_show"></div>
        <img src="/img/PSRD_3.svg" />
      </div>
      <div className="Text_wrapper">
        <div className="Text_wrapper_top">
          <div className="Text_Wrapper_style"> Minimal Style</div>
          <div className="Text_Wrapper_heading">
            A modern space full of calming bedroom ideas
          </div>
        </div>
        <div className="Textn_Wrapper_description">
          Welcome to a small, modern-style bedroom with clean, simple lines and
          beautiful empty spaces. Sleek, organised storage makes sure there’s no
          clutter and helps create a calm place to recharge. And you can set the
          mood in an instant as much of the lighting and more are smart products
          controlled from the IKEA Home smart app on your phone.
        </div>
      </div>
    </div>
  );
}

export default Pic_button;
