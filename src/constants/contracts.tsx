import { Contract, RpcProvider, constants } from "starknet";

import hubAbi from "./plethora_hub_abi.json";
import nftAbi from "./plethora_nft_abi.json";
export const RegistryHash =
  "0x46163525551f5a50ed027548e86e1ad023c44e0eeb0733f0dab2fb1fdc31ed0";
export const ImplementationAddress =
  "0x45d67b8590561c9b54e14dd309c9f38c4e2c554dd59414021f9d079811621bd";

export const getHubContract = (account: any) =>
  new Contract(
    hubAbi,
    process.env.NEXT_PUBLIC_PLETHORA_HUB_ADDRESS || "",
    account,
  );

export const getNFTContract = (account: any) =>
  new Contract(
    nftAbi,
    process.env.NEXT_PUBLIC_PLETHORA_NFT_ADDRESS || "",
    account,
  );
