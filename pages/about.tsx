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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde
            quibusdam illum, error officiis minus eaque magni accusantium iusto
            provident consequatur quia, est in earum velit. At quis, voluptatum,
            fugit eos esse repudiandae ipsum itaque nemo vero sunt consequuntur
            recusandae iste culpa sequi veritatis distinctio amet eaque commodi
            tempora deleniti? Et facere eius nesciunt ad voluptate, quos beatae
            fugiat quasi ab quam unde quis qui ratione illo. Maxime nam magnam
            error, amet officiis vero dolore fugiat reiciendis voluptate
            accusantium dignissimos impedit expedita? Repellat perferendis sequi
            dolorum quos minus, aliquam deserunt fugiat commodi fuga voluptatum
            quia mollitia, atque error quo debitis itaque veritatis qui ipsum
            dignissimos nesciunt ipsa dolores non dolorem ratione! Cumque
            quibusdam quaerat minima voluptatem provident nobis tempora
            accusamus, magni totam maiores iure, nemo enim, dolores ea nostrum
            numquam quidem saepe ipsa error? Laborum quos amet, ducimus nisi
            itaque cum odio, accusamus maiores at enim, veritatis veniam rem
            dolorem?
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
