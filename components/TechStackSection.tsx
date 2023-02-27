import { aboutData } from "../constants/aboutData";
import { AboutData } from "../typings";
import TechStackItem from "./TechStackItem";

interface Props {
  section: keyof AboutData;
}

const TechStackSection = ({ section }: Props) => {
  return (
    <div className="space-y-2">
      <h4 className="capitalize sm:text-xl">{section}</h4>
      <div className="flex space-x-14 sm:space-x-20">
        {aboutData[section].map((data) => (
          <TechStackItem techStack={data} />
        ))}
      </div>
    </div>
  );
};
export default TechStackSection;
