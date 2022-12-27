import { useRouter } from "next/router";
import {
  ChainIdentifier,
  useNFT,
  ArtivaContext,
  useMetadata,
} from "@artiva/shared";
import { NFTProps } from "@artiva/shared";
import { NFTObject } from "@zoralabs/nft-hooks";
import { Fragment } from "react";
import { useContext } from "react";
import useThemeComponent from "@/hooks/theme/useThemeComponent";
import Layout from "@/components/Layout";
import useThemeURL from "@/hooks/theme/useThemeURL";

const NFT = () => {
  const {
    query: { chain, contract, tokenid },
  } = useRouter();
  const ctx = useContext(ArtivaContext);

  const platformId = process.env.NEXT_PUBLIC_PLATFORM_CONTRACT;
  const { data: platform } = useMetadata({ platform: platformId });

  const themeURL = useThemeURL({ theme: platform?.themeURL });

  const { data } = useNFT({
    chain: chain as ChainIdentifier,
    contractAddress: contract as string,
    tokenId: tokenid as string,
  });

  const NFTComponentDynamic = useThemeComponent<NFTProps>({
    component: "./NFT",
    themeURL,
  });

  if (!NFTComponentDynamic || !platform) return <Fragment />;

  const props: NFTProps = {
    nft: data as NFTObject,
    ctx,
    platform: { ...platform, id: platformId as string },
  };

  return (
    <Layout platform={platform}>
      <NFTComponentDynamic {...props} />
    </Layout>
  );
};

export default NFT;
