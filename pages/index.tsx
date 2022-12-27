import { Fragment } from "react";
import Layout from "@/components/Layout";
import { ArtivaContext, HomeProps, useMetadata } from "@artiva/shared";
import { useContext } from "react";
import useThemeComponent from "@/hooks/theme/useThemeComponent";
import useThemeURL from "@/hooks/theme/useThemeURL";

const Home = () => {
  const ctx = useContext(ArtivaContext);

  const platformId = process.env.NEXT_PUBLIC_PLATFORM_CONTRACT;
  const { data: platform } = useMetadata({ platform: platformId });

  const themeURL = useThemeURL({ theme: platform?.themeURL });

  console.log("platformId", platformId);

  const HomeDynamic = useThemeComponent<HomeProps>({
    component: "./Home",
    themeURL,
  });

  if (!platform) return <Fragment />;

  return (
    <Layout platform={platform}>
      {HomeDynamic ? (
        <HomeDynamic
          ctx={ctx}
          platform={{ ...platform, id: platformId as string }}
        />
      ) : (
        <Fragment />
      )}
    </Layout>
  );
};

export default Home;
