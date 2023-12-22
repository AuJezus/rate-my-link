import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

interface LinkHeaderProps {}

const LinkHeader: FC<LinkHeaderProps> = ({}) => {
  const bookmark = false;
  return (
    <div className="flex items-center justify-around">
      <h1 className="text-5xl font-extrabold capitalize text-neutral-100">
        Tailwind Docs
      </h1>

      <Link href="/profile" className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src="/demo-profile.jpg"
            alt="Demo profile picture"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-2xl text-neutral-100">AuJezus</span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          className={`${
            bookmark
              ? "bg-gradient-to-r from-fuchsia-500 to-rose-600 text-neutral-900"
              : "border-2 border-neutral-300 text-neutral-300 hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
          } rounded-md px-2 py-1.5 text-3xl transition-all`}
        >
          {bookmark ? <CiBookmarkCheck /> : <CiBookmark />}
        </button>

        <Link
          href="pageurl"
          className="rounded-md border-2 border-neutral-300 px-4 py-2 text-xl font-medium text-neutral-300 transition-colors hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
        >
          Visit link
        </Link>
      </div>
    </div>
  );
};

export default LinkHeader;
