import { Tag } from "../../typings";
import TagItem from "./TagItem";

interface Props {
  open: boolean;
  tags: Tag[];
}

const TagList = ({ open, tags }: Props) => {
  return (
    <ul
      className={`absolute left-0 flex flex-wrap gap-1 ${
        open ? "top-7 sm:top-8" : "top-6 sm:top-7"
      }`}
    >
      {tags.map((tag) => (
        <TagItem key={tag.name} tag={tag} />
      ))}
    </ul>
  );
};
export default TagList;
