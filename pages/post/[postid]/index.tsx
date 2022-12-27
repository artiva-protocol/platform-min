import Layout from "@/components/Layout";
import {
  ArtivaContext,
  usePostContent,
  Post,
  PostProps,
  useMetadata,
} from "@artiva/shared";
import { Fragment } from "react";
import { useContext } from "react";
import useThemeComponent from "@/hooks/theme/useThemeComponent";
import { useRouter } from "next/router";
import useThemeURL from "@/hooks/theme/useThemeURL";
import useSWR from "swr";

const PostComponent = () => {
  const platformId = process.env.NEXT_PUBLIC_PLATFORM_CONTRACT;
  const { data: platform } = useMetadata({ platform: platformId });

  const ctx = useContext(ArtivaContext);
  const themeURL = useThemeURL({ theme: platform?.themeURL });
  const {
    query: { postid },
  } = useRouter();

  const { data: post } = useSWR<Post>(
    `/api/platform/${platformId}/post/${postid}`
  );
  const { data } = usePostContent(post);

  const PostDynamic = useThemeComponent<PostProps>({
    component: "./Post",
    themeURL,
  });

  if (!PostDynamic || !platform) return <Fragment />;

  return (
    <Layout platform={platform}>
      <PostDynamic
        platform={{ ...platform, id: platformId as string }}
        ctx={ctx}
        post={post}
        postData={data}
      />
    </Layout>
  );
};

export default PostComponent;
