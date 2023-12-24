"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaLink, FaUser } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";
import { Session } from "@supabase/auth-helpers-nextjs";
import useAuthModal from "@/hooks/useAuthModal";

interface NavBarProps {
  session: Session | null;
}

export const NavBar: FC<NavBarProps> = ({ session }) => {
  const { openModal } = useAuthModal();

  return (
    <nav className="bg-gradient-to-r from-fuchsia-500 to-rose-600 pb-1">
      <ul className="flex items-center justify-between bg-neutral-900 px-12 py-2">
        <li>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-3xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-fuchsia-500 to-rose-600 bg-clip-text text-transparent">
              Linker
            </span>
            <FaLink className="text-neutral-100" />
          </Link>
        </li>
        <div className="flex items-center gap-16">
          <li>
            <Link
              href="/browse"
              className="text-lg font-medium text-neutral-300 transition-colors hover:text-neutral-100"
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              href="/new"
              className="flex items-center gap-2 text-lg font-medium text-neutral-300 hover:text-neutral-100"
            >
              New Link <MdOutlineAddLink />
            </Link>
          </li>
          <li>
            {session && (
              <div className="flex items-center justify-center gap-2">
                <div className="relative aspect-square h-8 overflow-hidden rounded-full">
                  <Image
                    src="/demo-profile.jpg"
                    alt="Demo profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href={`/profile/${session.user.id}`}
                  className="text-lg font-medium text-neutral-300 hover:text-neutral-100"
                >
                  AuJezus
                </Link>
              </div>
            )}
            {!session && (
              <button
                className="rounded-md bg-gradient-to-r from-fuchsia-500 to-rose-600 p-0.5"
                onClick={openModal}
              >
                <span className="flex items-center gap-2 rounded-md bg-neutral-900 px-2 py-1 font-medium text-neutral-100 transition-colors hover:bg-transparent hover:text-neutral-900">
                  Sign In <FaUser />
                </span>
              </button>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};
