import { useRouter } from "next/router";
import {
  ChainIdentifier,
  NFTContractProps,
  useMetadata,
  useNFTContract,
} from "@artiva/shared";
import { Fragment } from "react";
import { ArtivaContext } from "@artiva/shared";
import { useContext } from "react";
import useThemeComponent from "@/hooks/theme/useThemeComponent";
import Layout from "@/components/Layout";
import useThemeURL from "@/hooks/theme/useThemeURL";

const NFTContract = () => {
  const {
    query: { chain, contract },
  } = useRouter();

  const platformId = process.env.NEXT_PUBLIC_PLATFORM_CONTRACT;
  const { data: platform } = useMetadata({ platform: platformId });

  const ctx = useContext(ArtivaContext);
  const { data } = useNFTContract({
    chain: chain as ChainIdentifier,
    contractAddress: contract as string,
  });

  const themeURL = useThemeURL({ theme: platform?.themeURL });

  const NFTComponentDynamic = useThemeComponent<NFTContractProps>({
    component: "./NFTContract",
    themeURL,
  });

  if (!NFTComponentDynamic || !platform) return <Fragment />;

  const props: NFTContractProps = {
    ctx,
    platform: { ...platform, id: platformId as string },
    nftContract: data,
  };

  return (
    <Layout platform={platform}>
      <NFTComponentDynamic {...props} />
    </Layout>
  );
};

export default NFTContract;
