import Topnav from "@/components/Topnav";
import Pic_show from "@/components/Pic_show";
import Sorting_box from "@/components/Sorting_box";
import Head from "next/head";
import Card from "@/components/Card";
import Card_horizontal from "@/components/Card_horizontal";
import Botnav from "@/components/Botnav";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      {/* <Nav /> */}
      <Topnav />
      <div class="Welcome_row">
        <div class="Welcome_text_wrapper">
          <h1>The best place to find your dream house</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus
            suscipit turpis sed vitae.
          </h2>
          <div className="Start_Exploring">Start Exploring </div>
        </div>
        <Pic_show
          imageURL1="/img/L_Top_Pic.svg"
          imageURL2="/img/L_Bot_Pic.svg"
          imageURL3="/img/R_Top_Pic.svg"
          imageURL4="/img/R_Bot_Pic.svg"
        />
      </div>
      <Sorting_box />
      <div class="Heading">
        <h1>Recomended for you</h1>
      </div>
      <div class="card-row">
        <a href="/card/one">
          <Card
            title="A small modern bedroom that can show off your right side."
            style="cozy"
            roomsize="25m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="Flexible living room with space to sleep and relax."
            style="Minimal"
            roomsize="28m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="A modern space full of calming bedroom ideas."
            style="Minimal"
            roomsize="30 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="A flexible room with space for your style."
            style="Cozy"
            roomsize="28 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="A light, airy living room with space for personality."
            style="Minimal"
            roomsize="28 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="A space where creativity blooms."
            style="Cozy"
            roomsize="30 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
      </div>
      <div className="button_wrapper">
        <div className="button">
          <h1>see more</h1>
        </div>
      </div>
      <div className="Heading_wrapper">
        <div class="Room_size">
          <h1>Room size</h1>{" "}
        </div>
        <div class="Browse_all">
          <h2>Browse all</h2>
        </div>
      </div>
      <div class="card-row">
        <a href="/card/one">
          <Card
            title="A space where creativity blooms."
            style="Cozy"
            roomsize="30 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="A space where creativity blooms."
            style="Cozy"
            roomsize="30 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
        <a>
          <Card
            title="A space where creativity blooms."
            style="Cozy"
            roomsize="30 m²"
            imageURL="/img/image 1.svg"
          />
        </a>
      </div>
      <div className="Heading_wrapper2">
        <div class="Style">
          <h1>Style</h1>{" "}
        </div>
        <div class="Browse_all">
          <h2>Browse all</h2>
        </div>
      </div>
      <Card_horizontal
        title="Minimal Style"
        description="Simple decoration style emphasis on the use of minimal pieces of furniture. Each piece must be very useful. It also must not leave a simple design."
        roomsize_x1="25m²"
        roomsize_x2="28m²"
        roomsize_x3="30m²"
        imageURL="https://placehold.co/800x320"
      />
      <Card_horizontal
        title="Cozy Style"
        description="It is a decoration that focuses on creating a warm feeling for the residents. Mainly focusing on natural color tones."
        roomsize_x1="25m²"
        roomsize_x2="28m²"
        roomsize_x3="30m²"
        imageURL="https://placehold.co/800x320"
      />
      <Botnav />
    </div>
  );
}

export default Home;
