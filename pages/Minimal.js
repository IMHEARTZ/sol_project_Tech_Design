import Topnav from "@/components/Topnav";
import Pic_show from "@/components/Pic_show";
import Sorting_box from "@/components/Sorting_box";
import Head from "next/head";
import Style_card from "@/components/Style_card";
import Card from "@/components/Card";
import Card_horizontal from "@/components/Card_horizontal";
import Botnav from "@/components/Botnav";

function Minimal() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      {/* <Nav /> */}
      <Topnav />
      <div class="Heading">
        <h1>Minimal Style</h1>
      </div>
      <a>
        <Style_card
          style="Minimal Style"
          description="Simple decoration style emphasis on the use of minimal pieces of furniture. Each piece must be very useful. It also must not leave a simple design."
          imageURL="https://placehold.co/865x543"
        />
      </a>
      <div class="card-row">
        <a href="/card/one">
          <Card
            title="A small modern bedroom that can show off your right side."
            style="cozy"
            roomsize="25m²"
            imageURL=" /img/Room_1.svg"
          />
        </a>
        <a>
          <Card
            title="Flexible living room with space to sleep and relax."
            style="Minimal"
            roomsize="28m²"
            imageURL=" /img/Room_2.svg"
          />
        </a>
        <a>
          <Card
            title="A modern space full of calming bedroom ideas."
            style="Minimal"
            roomsize="30 m²"
            imageURL=" /img/Room_3.svg"
          />
        </a>
      </div>
      <div class="Heading">
        <h1>Recomended for you</h1>
      </div>
      <div class="card-row">
        <a href="/card/one">
          <Card
            title="A small modern bedroom that can show off your right side."
            style="cozy"
            roomsize="25m²"
            imageURL=" /img/Room_1.svg"
          />
        </a>
        <a>
          <Card
            title="Flexible living room with space to sleep and relax."
            style="Minimal"
            roomsize="28m²"
            imageURL=" /img/Room_2.svg"
          />
        </a>
        <a>
          <Card
            title="A modern space full of calming bedroom ideas."
            style="Minimal"
            roomsize="30 m²"
            imageURL=" /img/Room_3.svg"
          />
        </a>
        <a>
          <Card
            title="A flexible room with space for your style."
            style="Cozy"
            roomsize="28 m²"
            imageURL=" /img/Room_4.svg"
          />
        </a>
        <a>
          <Card
            title="A light, airy living room with space for personality."
            style="Minimal"
            roomsize="28 m²"
            imageURL=" /img/Room_5.svg"
          />
        </a>
        <a>
          <Card
            title="A space where creativity blooms."
            style="Cozy"
            roomsize="30 m²"
            imageURL=" /img/Room_6.svg"
          />
        </a>
      </div>
      <div className="button_wrapper">
        <div className="button">
          <h1>see more</h1>
        </div>
      </div>
      <Botnav />
    </div>
  );
}

export default Minimal;
