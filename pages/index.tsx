import type { NextPage } from "next";
import CardList from "../components/CardList";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Projects">
      <main className="mt-24">
        <CardList />
      </main>
    </Layout>
  );
};

export default Home;
