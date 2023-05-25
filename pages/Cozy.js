import Topnav from "@/components/Topnav";
import Head from "next/head";
import Style_card from "@/components/Style_card";
import Card from "@/components/Card";
import Botnav from "@/components/Botnav";

function Cozy() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      {/* <Nav /> */}
      <Topnav link="/" />
      <div class="Heading">
        <h1>Cozy Style</h1>
      </div>
      <a>
        <Style_card
          style="Cozy Style"
          description="Simple decoration style emphasis on the use of minimal pieces of furniture. Each piece must be very useful. It also must not leave a simple design."
          imageURL="/img/Cozy_Pic.svg"
        />
      </a>
      <div class="card-row">
        <a>
          <Card
            title="Idea to decorate a 25 m² room to become your dream room."
            style="Cozy"
            roomsize="25m²"
            imageURL=" /img/Room_6.svg"
          />
        </a>
        <a>
          <Card
            title="Flexible living room with space to sleep and relax."
            style="Cozy"
            roomsize="28m²"
            imageURL=" /img/Room_7.svg"
          />
        </a>
        <a>
          <Card
            title="A modern space full of calming bedroom ideas."
            style="Cozy"
            roomsize="30 m²"
            imageURL=" /img/Room_9.svg"
          />
        </a>
      </div>
      <div className="Heading_wrapper2">
        <div class="Style">
          <h1>Latest posts</h1>{" "}
        </div>
        <div class="Browse_all">
          <h2>Browse all</h2>
        </div>
      </div>
      <div class="card-row">
        <a>
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

export default Cozy;
