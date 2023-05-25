import Topnav from "@/components/Topnav";
import Head from "next/head";
import Product_card from "@/components/Product_card";
import Card from "@/components/Card";
import Pic_button from "@/components/Pic_button";
import Botnav from "@/components/Botnav";
import Gallery from "@/components/Gallery";

function Room_Detail_3() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Topnav link="/" />
      <Pic_button />
      <div className="line_page_wrapper">
        <div className="line_page"></div>
      </div>
      <Gallery
        imageURL1="/img/PS_1.svg"
        imageURL2="/img/PS_2.svg"
        imageURL3="/img/PS_3.svg"
        imageURL4="/img/PS_4.svg"
      />
      <div className="line_page_wrapper">
        <div className="line_page"></div>
      </div>
      <div class="Heading">
        <h5>Furniture</h5>
      </div>
      <div class="card-row">
        <a>
          <Product_card
            title="NORDLI."
            description="Chest of 4 drawers, white, 160x54 cm"
            imageURL="/img/P_1.svg"
          />
        </a>
        <a>
          <Product_card
            title="SLATTUM"
            description="Upholstered bed frame, Knisa light grey, 180x200 cm"
            imageURL="/img/P_2.svg"
          />
        </a>
      </div>
      <div class="Heading">
        <h5>Decorative</h5>
      </div>
      <div class="card-row">
        <a>
          <Product_card
            title="NORDLI."
            description="Chest of 4 drawers, white, 160x54 cm"
            imageURL="/img/P_3.svg"
          />
        </a>
        <a>
          <Product_card
            title="SLATTUM"
            description="Upholstered bed frame, Knisa light grey, 180x200 cm"
            imageURL="/img/P_4.svg"
          />
        </a>
        <a>
          <Product_card
            title="SLATTUM"
            description="Upholstered bed frame, Knisa light grey, 180x200 cm"
            imageURL="/img/P_5.svg"
          />
        </a>
      </div>
      <div class="Heading">
        <h5>Others</h5>
      </div>
      <div class="card-row">
        <a>
          <Product_card
            title="NORDLI."
            description="Chest of 4 drawers, white, 160x54 cm"
            imageURL="/img/P_6.svg"
          />
        </a>
      </div>
      <div className="line_page_wrapper">
        <div className="line_page"></div>
      </div>
      <div class="Heading">
        <h5>You may also like!</h5>
      </div>
      <div class="card-row">
        <a>
          <Card
            title="A small modern bedroom that can show off your right side."
            style="cozy"
            roomsize="25m²"
            imageURL="/img/Room_1.svg"
          />
        </a>
        <a>
          <Card
            title="Flexible living room with space to sleep and relax."
            style="Minimal"
            roomsize="28m²"
            imageURL="/img/Room_2.svg"
          />
        </a>
        <a>
          <Card
            title="A modern space full of calming bedroom ideas."
            style="Minimal"
            roomsize="30 m²"
            imageURL="/img/Room_3.svg"
          />
        </a>
      </div>
      <div className="button_wrapper">
        <div className="button">
          <h1>next page</h1>
        </div>
      </div>
      <Botnav />
    </div>
  );
}

export default Room_Detail_3;
