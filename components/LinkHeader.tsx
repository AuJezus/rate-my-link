import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

interface LinkHeaderProps {}

const LinkHeader: FC<LinkHeaderProps> = ({}) => {
  const bookmark = true;
  return (
    <div className="flex justify-around items-center">
      <h1 className="text-5xl capitalize text-neutral-100 font-extrabold">
        Tailwind Docs
      </h1>

      <Link href="/profile" className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full overflow-hidden relative">
          <Image
            src="/demo-profile.jpg"
            alt="Demo profile picture"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-neutral-100 text-2xl">AuJezus</span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          className={`${
            bookmark
              ? "text-neutral-900 border-0 bg-gradient-to-r from-fuchsia-500 to-rose-600"
              : "text-neutral-300 border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-100"
          } px-2 py-1.5 border-2 rounded-md text-3xl transition-colors`}
        >
          {bookmark ? <CiBookmarkCheck /> : <CiBookmark />}
        </button>

        <Link
          href="pageurl"
          className="px-4 py-2 border-2 rounded-md text-xl text-neutral-300 border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 transition-colors hover:border-neutral-100 font-medium"
        >
          Visit link
        </Link>
      </div>
    </div>
  );
};

export default LinkHeader;
