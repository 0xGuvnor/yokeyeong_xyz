import Image from "next/image";
import { TechStack } from "../typings";

const TechStackItem = ({ techStack }: { techStack: TechStack }) => {
  return (
    <a
      href={techStack.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center underline underline-offset-2 hover:decoration-2 decoration-primary w-14 sm:w-16"
    >
      <div className="relative w-14 h-14 sm:w-16 sm:h-16">
        <Image
          src={techStack.image}
          alt={`${techStack.name} Logo`}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-sm sm:text-base whitespace-nowrap">{techStack.name}</p>
    </a>
  );
};
export default TechStackItem;
