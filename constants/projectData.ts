import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdDomainDisabled } from "react-icons/md";
import { ProjectData } from "../typings";

export const projectData: ProjectData[] = [
  {
    id: "discord-demo",
    title: "Discord Clone with Chat Functionality",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "ReduxToolkit", link: "https://redux-toolkit.js.org/" },
    ],
    image: "/discord_banner.jpeg",
    description: "",
    sourceCode: "https://github.com/0xGuvnor/discord-demo",
    deployment: "https://discord-demo.vercel.app/",
  },
  {
    id: "liquidatooor",
    title: "Aave V3 dApp to liquidate loans",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Solidity", link: "https://soliditylang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Hardhat", link: "https://hardhat.org/" },
      { name: "WAGMI", link: "https://wagmi.sh/" },
      { name: "AaveV3", link: "https://app.aave.com/" },
      { name: "FlashLoans", link: "https://docs.aave.com/faq/flash-loans" },
      { name: "UniswapV3", link: "https://app.uniswap.org/#/swap" },
    ],
    image: "/aave_banner.jpg",
    description: `jdawd
    dad
              jdawdaa
                            mfmopada
              dawda`,
    sourceCode: {
      frontend: "https://github.com/0xGuvnor/Liquidatooor_client",
      backend: "https://github.com/0xGuvnor/liquidatooor_hardhat",
    },
    deployment: "https://liquidatooor.vercel.app/",
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "Stripe", link: "https://stripe.com/" },
    ],
    image: "/netflix_banner.webp",
    description: "",
    sourceCode: "https://github.com/0xGuvnor/netflix-clone",
    deployment: "https://neckfleeks.vercel.app/",
  },
  {
    id: "apple-clone",
    title: "Alternate Apple Clone",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Stripe", link: "https://stripe.com/" },
    ],
    image: "/apple_banner.png",
    description: "",
    sourceCode: "https://github.com/0xGuvnor/apple-alt-clone",
    deployment: "https://apple-alt-clone.vercel.app/",
  },
  {
    id: "pokemon-nft-minter",
    title: "Pokémon NFT Minter",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Javascript", link: "https://www.javascript.com/" },
      { name: "Solidity", link: "https://soliditylang.org/" },
      { name: "Hardhat", link: "https://hardhat.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "TheGraph", link: "https://thegraph.com/" },
    ],
    image: "/pokemon_banner.jpg",
    description: "",
    sourceCode: {
      frontend: "https://github.com/0xGuvnor/nft-minter-pokemon-frontend",
      backend: "https://github.com/0xGuvnor/nft-minter-pokemon",
    },
    deployment: "https://mint-a-pokemon.vercel.app/",
  },
  {
    id: "reddit-clone",
    title: "Reddit Clone",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Javascript", link: "https://www.javascript.com/" },
      { name: "Supabase", link: "https://supabase.com/" },
      { name: "SWR", link: "https://swr.vercel.app/" },
    ],
    image: "/reddit_banner.jpg",
    description: "",
    sourceCode: "https://github.com/0xGuvnor/reddit-UI-clone",
    deployment: "https://reddit-ui-clone.vercel.app/",
  },
  {
    id: "fintech-demo",
    title: "Fintech Startup Demo",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "FramerMotion", link: "https://www.framer.com/motion/" },
    ],
    image: "/fintech_banner.png",
    description: "",
    sourceCode: "https://github.com/0xGuvnor/fintech-demo",
    deployment: "https://fintech-demo.vercel.app/",
  },
  {
    id: "gamefi-demo",
    title: "GameFi Startup Demo",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "FramerMotion", link: "https://www.framer.com/motion/" },
    ],
    image: "/gamefi_banner.png",
    description: "",
    sourceCode: "https://github.com/0xGuvnor/gamefi-demo",
    deployment: "https://metaverse-project-demo.vercel.app",
  },
  {
    id: "uniswap-clone",
    title: "Uniswap Clone",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Javascript", link: "https://www.javascript.com/" },
      { name: "Solidity", link: "https://soliditylang.org/" },
      { name: "Hardhat", link: "https://hardhat.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Sanity", link: "https://www.sanity.io/" },
    ],
    image: "/uniswap_banner.avif",
    description: "",
    sourceCode: {
      frontend: "https://github.com/0xGuvnor/uniswap-demo-client",
      backend: "https://github.com/0xGuvnor/uniswap-demo-backend",
    },
    deployment: "https://uniswap-demo-client.vercel.app/",
  },
];
