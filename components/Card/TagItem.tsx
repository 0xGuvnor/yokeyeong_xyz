import { MdTag } from "react-icons/md";
import { Tag } from "../../typings";

const TagItem = ({ tag }: { tag: Tag }) => {
  return (
    <li className="flex items-center px-2 py-1 text-[10px] md:text-xs transition duration-200 ease-in-out rounded-full bg-secondary hover:bg-secondary-focus text-secondary-content hover:text-white">
      <MdTag className="w-3 h-3 md:w-4 md:h-4" />
      <a
        href={tag.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        {tag.name}
      </a>
    </li>
  );
};
export default TagItem;
