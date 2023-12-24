"use client";

import { addReaction } from "@/lib/actions";
import React, { FC, useEffect, useState } from "react";
import { RiDislikeFill, RiHeartFill } from "react-icons/ri";
import Spinner from "./Spinner";

interface LinkButtonsProps {
  likes: number;
  dislikes: number;
  linkId: number;
  isLiked: boolean | null;
}

const LinkButtons: FC<LinkButtonsProps> = ({
  likes,
  dislikes,
  linkId,
  isLiked,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const like = () => {
    addReaction(linkId, true);
    setIsLoading(true);
  };

  const dislike = () => {
    addReaction(linkId, false);
    setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [linkId, likes, dislikes, isLiked]);

  return (
    <>
      <button
        className={`${
          isLiked ? "" : "bg-rose-600"
        } absolute bottom-0 left-0 flex aspect-square w-20 -translate-x-1/2 translate-y-1/2 flex-wrap items-center justify-center gap-x-2 rounded-full border-2 border-rose-600 bg-neutral-900 p-1 align-middle text-2xl font-medium text-neutral-100 hover:bg-rose-600`}
        onClick={dislike}
      >
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <RiDislikeFill /> {dislikes}
          </>
        )}
      </button>
      <button
        className={`${
          isLiked ? "bg-emerald-600" : ""
        } absolute bottom-0 right-0 flex aspect-square w-20 translate-x-1/2 translate-y-1/2 flex-wrap items-center justify-center gap-x-2 rounded-full border-2 border-emerald-600 bg-neutral-900 p-1 align-middle text-2xl font-medium text-neutral-100 hover:bg-emerald-600`}
        onClick={like}
      >
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <RiHeartFill /> {likes}
          </>
        )}
      </button>
    </>
  );
};

export default LinkButtons;
