"use client";

import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiDislikeFill, RiHeartFill } from "react-icons/ri";

interface LinkContentProps {}

const LinkContent: FC<LinkContentProps> = ({}) => {
  return (
    <div>
      <div className="flex items-center relative mb-12">
        <iframe
          id="frame"
          title="Website Preview"
          src={"https://tailwindcss.com/docs/customizing-colors"}
          className="w-full h-[75vh]"
        />
        <button className="hover:bg-rose-600 bg-neutral-900 w-20 border-2 text-neutral-100 border-rose-600 absolute bottom-0 translate-y-1/2 aspect-square flex rounded-full items-center justify-center gap-x-2 p-1 text-2xl left-0 -translate-x-1/2 font-medium align-middle flex-wrap">
          <RiDislikeFill /> 189
        </button>
        <button className="hover:bg-emerald-600 bg-neutral-900 w-20 border-2 text-neutral-100 border-emerald-600 absolute bottom-0 translate-y-1/2 aspect-square flex rounded-full items-center justify-center gap-x-2 p-1 text-2xl right-0 translate-x-1/2 font-medium align-middle flex-wrap">
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
