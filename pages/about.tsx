import Layout from "../components/Layout";
import TechStackSection from "../components/TechStackSection";

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

        <section className="mt-10">
          <h3 className="text-lg sm:text-2xl">About Me</h3>
          <p className="font-light text-justify whitespace-pre-line sm:text-xl">
            {`I have a strong passion for building decentralized applications and exploring the potential of blockchain technology. Previously, I was a certified Salesforce and PowerBI consultant, where I gained extensive experience working with multinational companies across various industries, ranging from food delivery platforms to mining.

            I hold a Bachelor of Commerce degree (majoring in Economics and Finance) from the University of Melbourne and a Master's in Business Analytics from Melbourne Business School, which has provided me with a solid foundation in finance and data analysis. Throughout my academic and professional journey, I have always been passionate about exploring new technologies and their potential applications in various industries.

            In recent years, I was introduced to the world of cryptocurrency and more specifically, decentralised finance. This spurred me to take on a new challenge and self-teach myself web development, subsequently focusing on Web3. With an unwavering determination to succeed, I have been constantly strengthening my technical foundation and expanding my knowledge and skills in this area. I have been working on various projects, including building decentralized applications, building functional clones of popular websites, and exploring blockchain protocols.
            
            If you are looking for a dedicated and self-motivated developer who can bring a unique perspective to your team, I am your ideal candidate. Don't hesitate to reach out and let's chat about how I can contribute to your team's success.`}
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg sm:text-2xl">Preferred Technology Stack</h3>
          <div className="flex flex-col space-y-5">
            <TechStackSection section="languages" />
            <TechStackSection section="frameworks" />
            <TechStackSection section="libraries" />
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default About;
