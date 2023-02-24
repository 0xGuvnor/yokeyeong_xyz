import Tag from "./Tag";

interface Props {
  open: boolean;
  tags: string[];
}

const TagList = ({ open, tags }: Props) => {
  return (
    <ul
      className={`absolute left-0 flex flex-wrap gap-1 ${
        open ? "top-7 sm:top-8" : "top-6 sm:top-7"
      }`}
    >
      {tags.map((tag, id) => (
        <Tag key={id} name={tag} />
      ))}
    </ul>
  );
};
export default TagList;
