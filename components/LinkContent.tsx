"use client";

import React, { FC } from "react";
import { RiDislikeFill, RiHeartFill } from "react-icons/ri";

interface LinkContentProps {}

const LinkContent: FC<LinkContentProps> = ({}) => {
  return (
    <div>
      <div className="relative mb-12 flex items-center">
        <iframe
          id="frame"
          title="Website Preview"
          src={"https://tailwindcss.com/docs/customizing-colors"}
          className="h-[75vh] w-full"
        />
        <button className="absolute bottom-0 left-0 flex aspect-square w-20 -translate-x-1/2 translate-y-1/2 flex-wrap items-center justify-center gap-x-2 rounded-full border-2 border-rose-600 bg-neutral-900 p-1 align-middle text-2xl font-medium text-neutral-100 hover:bg-rose-600">
          <RiDislikeFill /> 189
        </button>
        <button className="absolute bottom-0 right-0 flex aspect-square w-20 translate-x-1/2 translate-y-1/2 flex-wrap items-center justify-center gap-x-2 rounded-full border-2 border-emerald-600 bg-neutral-900 p-1 align-middle text-2xl font-medium text-neutral-100 hover:bg-emerald-600">
          <RiHeartFill /> 100
        </button>
      </div>

      <p className="text-xl">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
    </div>
  );
};

export default LinkContent;
