import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <div className="flex flex-col mx-8 lg:mx-16 xl:mx-auto sm:mx-12 mt-28 sm:mt-24 max-w-7xl">
        <h1 className="text-4xl text-justify sm:text-5xl">
          Hello, I'm
          <br />
          Yoke Yeong.
        </h1>
      </div>
    </Layout>
  );
};
export default About;
