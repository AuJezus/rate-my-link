import { PageProps } from "@/.next/types/app/page";
import {
  getSession,
  getUserBookmarkLinks,
  getUserData,
  getUserLinks,
} from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaPencil, FaRightFromBracket, FaTrashCan } from "react-icons/fa6";

interface ProfilePageProps {
  params: { id: string };
}

const ProfilePage: FC<ProfilePageProps> = async ({ params }) => {
  const session = await getSession();
  const isOwner = params.id === session?.user.id;
  const user = await getUserData(params.id);

  const userLinks = await getUserLinks(params.id);
  const userBookmarkLinks = await getUserBookmarkLinks(params.id);

  return (
    <div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={user.avatar_url || ""}
            alt="Demo profile picture"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-5xl font-semibold text-neutral-100">
          {user.username}
        </span>

        {isOwner && (
          <button className="flex items-center gap-2 hover:underline">
            Sign out <FaRightFromBracket />
          </button>
        )}
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4">
        <h2 className="text-center text-4xl font-semibold text-neutral-100">
          Your links
        </h2>
        <div className="flex flex-col justify-between divide-y-2 divide-fuchsia-600">
          {userLinks.map((link) => (
            <div
              className="flex w-full justify-between gap-4 py-4"
              key={link.id}
            >
              <p className="w-40 text-2xl font-medium text-neutral-300">
                {link.title}
              </p>
              <p className="w-60 text-lg">{link.url}</p>
              <div className="flex items-center gap-4">
                <Link
                  href={link.url || ""}
                  className="rounded-md border-2 border-neutral-300 px-3 py-1.5 text-lg font-medium text-neutral-300 transition-colors hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Visit link
                </Link>
                {isOwner && (
                  <>
                    <Link className="text-xl text-yellow-600" href={"lol"}>
                      <FaPencil />
                    </Link>
                    <button className="text-xl text-rose-600">
                      <FaTrashCan />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4">
        <h2 className="text-center text-4xl font-semibold text-neutral-100">
          Your bookmarks
        </h2>
        <div className="flex flex-col justify-between divide-y-2 divide-rose-600">
          {userBookmarkLinks.map((link) => (
            <div
              className="flex w-full justify-between gap-4 py-4"
              key={link?.id}
            >
              <p className="w-40 text-2xl font-medium text-neutral-300">
                {link?.title}
              </p>
              <p className="w-60 text-lg">{link?.url}</p>
              <Link
                href={link?.url || ""}
                className="rounded-md border-2 border-neutral-300 px-3 py-1.5 text-lg font-medium text-neutral-300 transition-colors hover:border-neutral-100 hover:bg-neutral-100 hover:text-neutral-900"
              >
                Visit link
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
