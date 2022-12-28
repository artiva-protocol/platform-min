import Layout from "@/components/Layout";
import { ArtivaContext, TagProps, useMetadata } from "@artiva/shared";
import { Fragment } from "react";
import { useContext } from "react";
import useThemeComponent from "@/hooks/theme/useThemeComponent";
import { useRouter } from "next/router";
import useThemeURL from "@/hooks/theme/useThemeURL";

const TagComponent = () => {
  const platformId = process.env.NEXT_PUBLIC_PLATFORM_CONTRACT;
  const { data: platform } = useMetadata({ platform: platformId });

  const ctx = useContext(ArtivaContext);
  const themeURL = useThemeURL({ theme: platform?.themeURL });
  const {
    query: { tag },
  } = useRouter();

  const TagDynamic = useThemeComponent<TagProps>({
    component: "./Tag",
    themeURL,
  });

  if (!TagDynamic || !platform) return <Fragment />;

  const parsedTag = decodeURIComponent(tag as string);

  return (
    <Layout platform={platform}>
      <TagDynamic
        platform={{ ...platform, id: platformId as string }}
        ctx={ctx}
        tag={parsedTag}
      />
    </Layout>
  );
};

export default TagComponent;
