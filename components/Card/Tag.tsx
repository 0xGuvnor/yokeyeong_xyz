import { MdTag } from "react-icons/md";

interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return (
    <li className="flex items-center px-2 py-1 text-[10px] md:text-xs transition duration-200 ease-in-out rounded-full bg-secondary hover:bg-secondary-focus text-secondary-content hover:text-white">
      <MdTag className="w-3 h-3 md:w-4 md:h-4" />
      <a href="https://www.google.com/">{name}</a>
    </li>
  );
};
export default Tag;
