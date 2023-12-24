"use client";

import { addBookmark, deleteBookmark } from "@/lib/actions";
import React, { FC, useEffect, useState } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

interface BookmarkBtnProps {
  isBookmark: boolean;
  linkId: number | null | undefined;
}

const BookmarkBtn: FC<BookmarkBtnProps> = ({ linkId, isBookmark }) => {
  const [bookmarked, setBookmarked] = useState(isBookmark);

  const bookmark = () => {
    if (bookmarked) {
      deleteBookmark(linkId || -1);
      setBookmarked(false);
    }

    if (!bookmarked) {
      addBookmark(linkId || -1);
      setBookmarked(true);
    }
  };

  useEffect(() => {
    setBookmarked(isBookmark);
  }, [isBookmark]);

  return (
    <button
      className={`${
        bookmarked
          ? "bg-gradient-to-r from-fuchsia-500 to-rose-600 text-neutral-900"
          : "border-2 border-neutral-300 text-neutral-300 hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
      } rounded-md px-2 py-1.5 text-3xl transition-colors`}
      onClick={bookmark}
    >
      {bookmarked ? <CiBookmarkCheck /> : <CiBookmark />}
    </button>
  );
};

export default BookmarkBtn;
