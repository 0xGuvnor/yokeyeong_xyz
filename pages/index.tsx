import type { NextPage } from "next";
import Head from "next/head";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>yokeyeong.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="mt-24">
        <CardList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
