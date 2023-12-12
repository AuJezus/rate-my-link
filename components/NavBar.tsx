import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaLink, FaUser } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = ({}) => {
  const user = false;

  return (
    <nav className="pb-1 bg-gradient-to-r from-fuchsia-500 to-rose-600">
      <ul className="flex px-12 py-2 bg-neutral-900 items-center justify-between">
        <li>
          <Link
            href="/"
            className="flex text-3xl font-extrabold gap-2 items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-rose-600">
              Linker
            </span>
            <FaLink className="text-neutral-100" />
          </Link>
        </li>
        <div className="flex gap-16 items-center">
          <li>
            <Link
              href="/browse"
              className="text-lg text-neutral-300 transition-colors hover:text-neutral-100 font-medium"
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              href="/newLink"
              className="text-lg flex gap-2 items-center text-neutral-300 hover:text-neutral-100 font-medium"
            >
              New Link <MdOutlineAddLink />
            </Link>
          </li>
          <li>
            {user && (
              <div className="flex items-center justify-center gap-2">
                <div className="aspect-square h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/demo-profile.jpg"
                    alt="Demo profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href="/profile"
                  className="text-lg text-neutral-300 hover:text-neutral-100 font-medium"
                >
                  AuJezus
                </Link>
              </div>
            )}
            {!user && (
              <button className="bg-gradient-to-r from-fuchsia-500 to-rose-600 p-0.5 rounded-md">
                <span className="flex items-center gap-2 text-neutral-100 bg-neutral-900 hover:bg-transparent hover:text-neutral-900 transition-colors font-medium px-2 rounded-md py-1">
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
