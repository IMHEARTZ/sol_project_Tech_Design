import Topnav from "@/components/Topnav";
import Head from "next/head";
import Style_card from "@/components/Style_card";
import Pic_Button from "@/components/Pic_Button";
import Botnav from "@/components/Botnav";

function Room_Detail_3() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Topnav link="/" />
      <Pic_Button />
      <Botnav />
    </div>
  );
}

export default Room_Detail_3;
