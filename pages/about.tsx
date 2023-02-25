import Image from "next/image";
import Layout from "../components/Layout";
import { aboutData } from "../constants/aboutData";

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
          <p className="font-light sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            velit eius reprehenderit exercitationem est? Odit nulla quis dolorem
            quibusdam autem itaque, voluptate fugit adipisci voluptatum, iusto
            dolore numquam atque? Mollitia quae aliquam laborum facere
            laudantium recusandae alias error accusamus? Facere, illo adipisci?
            Ipsa optio id culpa, nisi, totam amet quod, vel reiciendis quae
            maxime sed labore? Doloribus quasi nam quidem veritatis nulla
            impedit, tenetur vitae eveniet facilis inventore a harum amet?
            Suscipit inventore est quae itaque, velit sed maxime libero beatae
            aspernatur unde culpa provident labore commodi adipisci voluptatem
            animi et minima illum quam ratione doloribus ipsum, tempore maiores?
            Commodi.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg sm:text-2xl">Preferred Technology Stack</h3>
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h4 className="font-light sm:text-xl">Languages</h4>
              <div className="flex space-x-10 sm:space-x-20">
                {aboutData.languages.map((language) => (
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                      <Image
                        src={language.image}
                        alt={`${language.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm font-light sm:text-base">
                      {language.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-light sm:text-xl">Frameworks</h4>
              <div className="flex space-x-10 sm:space-x-20">
                {aboutData.frameworks.map((framework) => (
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                      <Image
                        src={framework.image}
                        alt={`${framework.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm font-light sm:text-base">
                      {framework.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default About;
