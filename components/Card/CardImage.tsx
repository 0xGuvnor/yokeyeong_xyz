import Image from "next/image";

interface Props {
  open: boolean;
  image: string;
  alt: string;
}

const CardImage = ({ open, image, alt }: Props) => {
  if (open) {
    return (
      <div className="absolute top-0 left-0 w-full h-96 -z-10">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-top lg:object-center rounded-t-2xl md:rounded-t-3xl"
        />
      </div>
    );
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center transition duration-300 ease-in-out rounded-2xl md:rounded-3xl sm:contrast-75 hover:contrast-100"
      />
    </div>
  );
};
export default CardImage;
