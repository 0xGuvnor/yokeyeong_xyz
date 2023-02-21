import { projectData } from "../constants/projectData";
import Card from "./Card";
import { LayoutGroup } from "framer-motion";

const CardList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-8 xl:gap-16 md:gap-12 mx-auto max-w-[1500px]">
      <LayoutGroup>
        {projectData.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </LayoutGroup>
    </ul>
  );
};
export default CardList;
