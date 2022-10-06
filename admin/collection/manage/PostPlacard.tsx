import { Post } from "@artiva/shared";
import { TagIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PostComponent from "../Feed/PostPreview";
import TagModal from "./TagModal";

const PostPlacard = ({ post }: { post: Post }) => {
  const [open, setOpen] = useState(false);

  console.log("collection post", post);

  return (
    <div className="flex flex-col m-4">
      <TagModal open={open} setOpen={setOpen} post={post} />
      <div className="w-full">
        <PostComponent post={post} selected={false} />
      </div>
      <div className="pl-4 h-14 flex items-center w-full -mt-8 z-40">
        <button className="bg-red-500 mr-2 h-8 w-8 flex items-center justify-around rounded-md">
          <TrashIcon className="h-5 text-white" />
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-xs text-gray-600 rounded-md w-8 h-8 flex items-center justify-around"
        >
          <TagIcon className="h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default PostPlacard;