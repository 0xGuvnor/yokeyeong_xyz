import { useRouter } from "next/router";
import { ProjectData } from "../../typings";
import TagList from "./TagList";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import CardPlaceholder from "./CardPlaceholder";
import { AiOutlineClose } from "react-icons/ai";
import CardImage from "./CardImage";

interface Props extends ProjectData {
  id: number;
  isSelected: boolean;
}

const Card = ({
  id,
  isSelected,
  projectId,
  title,
  tags,
  pointOfInterest,
  backgroundColor,
}: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <Overlay open={open} setOpen={setOpen} />
      <CardPlaceholder open={open} />

      <motion.li
        layout
        transition={{ layout: { duration: 0.75, type: "spring" } }}
        style={{
          borderRadius: 26,
        }}
        onClick={handleOpen}
        className={`${
          open
            ? "fixed top-20 left-0 right-0 h-[92vh] w-[80vw] max-w-6xl mx-auto z-50 overflow-y-scroll shadow-2xl bg-primary"
            : "relative h-[300px] w-[300px] md:h-[380px] md:w-[380px] cursor-pointer bg-transparent z-20"
        } p-6 hover:shadow-2xl`}
      >
        <CardImage open={open} />
        <motion.div layout="position" className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="font-bold leading-5 text-white capitalize text-md md:leading-6 md:text-xl">
              {title}
            </h1>
            <AiOutlineClose
              onClick={() => setOpen((prev) => !prev)}
              className={`${
                !open && "hidden"
              } p-1 rounded-full cursor-pointer w-7 transition duration-300 ease-in-out h-7 hover:bg-primary/70 text-primary-content`}
            />
          </div>
          <TagList tags={tags} />
        </motion.div>

        {open && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:text-xl mt-[269px] md:mt-[295px] text-primary-content bg-primary -ml-6 p-6 -mr-6 z-30"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos,
            provident velit perferendis labore corrupti animi vitae qui magni
            est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            mollitia laborum placeat magnam vel voluptatem. Laborum,
            repudiandae. Repudiandae odio natus ducimus, corrupti sequi veniam
            ipsa harum at fugit. Quo cumque voluptatum tempora et. Rem quam
            repellendus, reiciendis, illo quos in repudiandae enim ea error
            itaque aspernatur neque nesciunt possimus. Doloremque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Omnis, ipsum vel. Iusto
            perspiciatis itaque obcaecati, cupiditate fugiat, iure, iste
            architecto eaque amet facere et nesciunt autem nulla nobis? Nihil
            vero, necessitatibus fugiat dolore voluptates alias debitis quisquam
            facere exercitationem omnis, eveniet esse quis. Laudantium quaerat
            et repellendus ad tempore saepe sint perspiciatis odit amet
            incidunt? Voluptas molestias veritatis delectus pariatur est dicta
            dolorem expedita officia omnis? Sed recusandae nobis qui neque
            provident sequi ullam reiciendis, exercitationem saepe vel.
            Deleniti, dolore eos sed aliquam fugit ut! Eaque quidem blanditiis
            nulla incidunt vitae, perferendis dolore dolorum cumque vero
            exercitationem repellat ut excepturi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facilis labore aliquid molestias
            reprehenderit inventore voluptatem sint, cupiditate deleniti dolorum
            itaque magnam temporibus voluptate quisquam, optio ratione suscipit!
            Voluptate aspernatur dignissimos illum quia quasi facere, natus
            suscipit labore harum repellendus numquam sapiente similique
            laboriosam explicabo fuga assumenda molestias voluptatibus excepturi
            ullam ducimus eligendi molestiae adipisci est? Quas minus
            necessitatibus placeat nemo iste! Distinctio dicta, quae sit iure,
            eaque in culpa nam asperiores unde nemo hic obcaecati amet, nulla
            dolore aliquid natus quam. Accusantium, illo labore tempora odio,
            tenetur id aperiam atque eveniet, vitae officiis dicta reiciendis
            perferendis laborum officia vero delectus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Fugiat impedit, quos repudiandae
            iste tempora ratione dolorem quod molestiae vitae eum similique,
            facilis et optio aliquid explicabo! Accusamus obcaecati quod iusto
            vel molestiae, recusandae dolorem pariatur ex ullam maxime aliquid
            officiis illum quisquam aperiam fuga voluptates qui enim. Voluptate
            neque iure ipsam nihil sunt ratione debitis ad, perspiciatis
            molestiae voluptas reiciendis! Blanditiis aut, voluptatem id eaque
            eligendi, dignissimos atque commodi eum possimus labore neque
            ducimus quaerat libero fugiat, magni veritatis ratione illo iure
            harum vitae modi repellendus explicabo nisi rerum. Non, culpa
            consectetur maxime sed possimus ipsa sunt fugit at id vitae ipsum,
            modi, in iure.
            <br />
            <br />
            Laboriosam iste, accusamus aperiam dolore dicta quam. Illum ut
            commodi pariatur rem, at repudiandae eos enim eum itaque? Itaque
            pariatur iure, rem veritatis placeat impedit. Molestias assumenda
            eveniet inventore, veniam aspernatur quasi molestiae facere harum
            excepturi perferendis accusantium delectus commodi, autem error illo
            quas magni nemo ab velit laboriosam! Saepe quia, aliquam repudiandae
            praesentium quidem deleniti dolorem blanditiis voluptatum ratione
            pariatur exercitationem perspiciatis beatae libero error vitae
            laboriosam enim consequatur sunt ut consequuntur eligendi unde
            maxime! Amet, praesentium facere? Minus dignissimos autem quidem
            laboriosam at consequuntur praesentium labore ratione facilis vero,
            sequi temporibus, eos ab.
          </motion.p>
        )}
      </motion.li>
    </>
  );
};
export default Card;
