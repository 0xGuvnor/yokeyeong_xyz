import { useRouter } from "next/router";
import { projectData } from "../constants/projectData";
import Card from "./Card";
import { LayoutGroup } from "framer-motion";

const CardList = () => {
  const router = useRouter();

  return (
    <ul className="flex flex-wrap justify-center gap-8 xl:gap-16 md:gap-12 mx-auto max-w-[1500px]">
      <LayoutGroup>
        {projectData.map((project, id) => (
          <Card
            key={id}
            id={id}
            isSelected={router.query.projectId === project.projectId}
            {...project}
          />
        ))}
      </LayoutGroup>
    </ul>
  );
};
export default CardList;
