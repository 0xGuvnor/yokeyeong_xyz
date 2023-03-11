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
      { name: "Redux Toolkit", link: "https://redux-toolkit.js.org/" },
    ],
    image: "/discord_banner.jpeg",
    description: `A Discord clone built with Next.js and powered by Firebase. This app allows authenticated users to create and chat in channels in real-time.

On the landing page, users would log in using their Google account (located on the top right corner), afterwhich they would be redirected to the familiar Discord chat interface where messages are sent in real-time. Users are also able to delete their own messages.`,
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
      { name: "Aave V3", link: "https://app.aave.com/" },
      { name: "Flash Loans", link: "https://docs.aave.com/faq/flash-loans" },
      { name: "Uniswap V3", link: "https://app.uniswap.org/#/swap" },
    ],
    image: "/aave_banner.jpg",
    description: `This dApp, Liquidatooor, allows users to liquidate Aave V3 loans that have a health factor below 1. This dApp is currently only deployed on the Avalanche and Polygon testnets.
    
Simply connect your wallet and enter the address of the account you wish to liquidate to check if it is eligible for liquidation, and it will show the account's supplied and borrowed positions. If an account is eligible for liquidation, the user will then choose which of the account's borrowed assets (if there are more than one) they wish to liquidate, and which of the account's supplied asset they would like to recieve in return. Lastly, the user would then need to click on the "liquidation" button to bring up the transaction confirmation window to complete the liquidation process.

Under the hood, the liquidation is done using flash loans from Aave, which means the user does not need any initial capital outlay (just enough to pay for the gas needed to complete the transaction). If the transaction is profitable, the profits will be automatically sent to the user's wallet, otherwise it will fail.

One thing to note is that as this is a generalised liquidation contract, token swaps from the collateral asset to the borrowed asset are done through a single Uniswap V3 pool, i.e. no multihops to determine the most optimal route. Therefore, it is advised that the user should check if there is sufficient liquidity in a Uniswap V3 liquidity pool to initiate the swap.`,
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
    description: `A Netflix clone built with Next.js and integrated with Firebase for storing user credentials and Stripe for simulating payment processing.
    
Users can create an account by entering any email address and password and clicking the "Sign up now" button. This will then redirect them to a page to choose a subscription tier, followed by a dummy Stripe payment page where they can use a testing credit card number of "4242 4242 4242 4242" to successfully subscribe.

To skip this step, simply login with the username "dev@netflix.com" and password "123456" to reach the familiar Netflix home page. Movies are populated with data from TMDB, so the data is constantly updated. 

Users can click on a movie/show's card to bring up a modal to watch its trailer (if available), along with displaying other relevant details. They can also add it to their personal saved list by clicking on the "+" icon.

To access their account's settings, users can click on the profile icon on the top right of the page to perform functions such as cancelling their subscription or to sign out.`,
    sourceCode: "https://github.com/0xGuvnor/netflix-clone",
    deployment: "https://neckfleeks.vercel.app/",
  },
  {
    id: "apple-clone",
    title: "Alternate Apple Clone",
    tags: [
      { name: "Nextjs", link: "https://nextjs.org/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Sanity", link: "https://www.sanity.io/" },
      { name: "NextAuth", link: "https://next-auth.js.org" },
      { name: "Redux Toolkit", link: "https://redux-toolkit.js.org/" },
      { name: "Stripe", link: "https://stripe.com/" },
    ],
    image: "/apple_banner.png",
    description: `An Apple clone with an alternate design built with Next.js, Content Management System (CMS) powered by Sanity.io, NextAuth for user authentication, and Stripe for payments checkout.
    
Users can log in using their Google account by clicking on the user icon on the top right corner. 

To add products to their shopping cart, simply click on the shopping bag icon on a product card, and you can enter the checkout page by clicking on the floating action button that appears on the bottom right corner of the screen or shopping bag icon on the header.

To complete your order, click "Check Out" button and you'll be redirected to Stripe's checkout page. Use Stripe's test credit card number "4242 4242 4242" to complete your order. If you've signed in with your Google account earlier, your first name will be displayed on the successful order page.`,
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
      { name: "Chainlink VRF", link: "https://vrf.chain.link/" },
      { name: "Pinata", link: "https://app.pinata.cloud/" },
      { name: "The Graph", link: "https://thegraph.com/" },
    ],
    image: "/pokemon_banner.jpg",
    description: `One of my first personal projects, this is a full-stack dApp to mint Pokémon NFTs on the Ethereum Goerli testnet. Users are able to mint a random Pokémon from any of the first 5 Pokémon generations, viewable on OpenSea. The randomness used to select a Pokémon for each NFT is powered by Chainlink's Verifiable Randomness Function (VRF) to ensure true non-deterministic randomness, while Pokémon data is provided by the Pokémon API and stored on IPFS through Pinata. Inital mints will display a gif of a hatching Pokémon egg, and will only be revealed after the deployer of the contract runs a script to attach the relevant Pokémon data to the NFT, based on the Pokémon ID provided by the VRF.
    
Additionally, administrative functions of the NFT contract are gated behind a multi-signature (multisig) contract, accessable through the "Admin" tab in the header. Admins can submit transactions to call predefined functions such as pausing/unpausing minting or granting user access roles to other addresses. Once the transaction has been submitted, it has to reach a predetermined number of comfirmations by other addresses in the multisig, e.g. a multisig with 3 addresses may require 2 confirmations, for it to be eligible to be executed.`,
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
    description: ``,
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
      { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    ],
    image: "/fintech_banner.png",
    description: ``,
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
      { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    ],
    image: "/gamefi_banner.png",
    description: ``,
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
    description: ``,
    sourceCode: {
      frontend: "https://github.com/0xGuvnor/uniswap-demo-client",
      backend: "https://github.com/0xGuvnor/uniswap-demo-backend",
    },
    deployment: "https://uniswap-demo-client.vercel.app/",
  },
];
