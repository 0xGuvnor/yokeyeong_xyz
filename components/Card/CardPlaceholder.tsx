interface Props {
  open: boolean;
}

const CardPlaceholder = ({ open }: Props) => {
  if (!open) return null;

  return <div className="h-[300px] w-[300px] md:h-[380px] md:w-[380px]"></div>;
};
export default CardPlaceholder;
