import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <div className="flex flex-col mx-8 lg:mx-16 2xl:mx-auto sm:mx-12 mt-28 sm:mt-[6.5rem] max-w-7xl">
        <h1 className="text-3xl text-justify sm:text-5xl">
          Hello, I'm{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Yoke Yeong
          </span>
          .
        </h1>
        <h3 className="w-2/3 text-lg font-light sm:text-2xl sm:w-1/2 xl:w-2/6">
          I'm an aspiring Web3 developer living in{" "}
          <span className="line-through decoration-accent">Singapore</span>{" "}
          Berlin.
        </h3>

        <p className="mt-10 font-light sm:text-xl">abc</p>
      </div>
    </Layout>
  );
};
export default About;
