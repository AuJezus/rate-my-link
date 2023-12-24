import {
  getLinkDislikeCount,
  getLinkLikeCount,
  getUserReaction,
} from "@/lib/actions";
import { Link } from "@/lib/types";
import React, { FC, useState } from "react";
import LinkButtons from "./LinkButtons";
import { boolean } from "zod";

interface LinkContentProps {
  link: Link | null;
}

const LinkContent: FC<LinkContentProps> = async ({ link }) => {
  const likes = await getLinkLikeCount(link.id);
  const dislikes = await getLinkDislikeCount(link.id);
  const userReaction = await getUserReaction(link.id);

  return (
    <div>
      <div className="relative mb-12 flex items-center">
        <iframe
          id="frame"
          title="Website Preview"
          src={link.url || ""}
          className="h-[75vh] w-full"
        />

        <LinkButtons
          likes={likes || 0}
          dislikes={dislikes || 0}
          linkId={link.id}
          isLiked={userReaction.liked}
        />
      </div>

      <p className="text-xl">{link.description}</p>
    </div>
  );
};

export default LinkContent;
