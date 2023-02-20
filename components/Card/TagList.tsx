import Tag from "./Tag";

interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {tags.map((tag, id) => (
        <Tag key={id} name={tag} />
      ))}
    </ul>
  );
};
export default TagList;