import { Link as LinkType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { addBookmark, getUserBookmark, getUserData } from "@/lib/actions";
import BookmarkBtn from "./BookmarkBtn";

interface LinkHeaderProps {
  link: LinkType | null;
}

const LinkHeader: FC<LinkHeaderProps> = async ({ link }) => {
  const bookmark = await getUserBookmark(link?.id || 0);
  const user = await getUserData(link?.user_id || "");

  return (
    <div className="flex items-center justify-around">
      <h1 className="text-5xl font-extrabold capitalize text-neutral-100">
        {link?.title}
      </h1>

      <Link
        href={`/profile/${link?.user_id}`}
        className="flex items-center gap-4"
      >
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={user.avatar_url || ""}
            alt="Demo profile picture"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-2xl text-neutral-100">{user.username}</span>
      </Link>

      <div className="flex items-center gap-4">
        <BookmarkBtn linkId={link?.id} isBookmark={!!bookmark} />

        <Link
          href={link?.url || ""}
          className="rounded-md border-2 border-neutral-300 px-4 py-2 text-xl font-medium text-neutral-300 transition-colors hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
        >
          Visit link
        </Link>
      </div>
    </div>
  );
};

export default LinkHeader;
