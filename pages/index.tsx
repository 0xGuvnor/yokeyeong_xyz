import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>yokeyeong.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="mt-16">Projects</main>
    </div>
  );
};

export default Home;
