import { Database } from "@/types_db";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { cookies } from "next/headers";
import { z } from "zod";
import { redirect } from "next/navigation";

const New = () => {
  async function createLink(formData: FormData) {
    "use server";
    const supabase = createServerComponentClient<Database>({ cookies });
    const CreateLink = z.object({
      title: z.string(),
      url: z.string(),
      description: z.string(),
    });

    const data = CreateLink.parse({
      title: formData.get("title"),
      url: formData.get("url"),
      description: formData.get("description"),
    });

    const { error } = await supabase.from("links").insert(data);
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="my-6 text-5xl font-semibold text-neutral-100">
        Create New Link
      </h1>
      <form action={createLink} className="flex flex-col gap-4">
        <label
          htmlFor="title"
          className="flex flex-col gap-2 text-lg font-semibold text-neutral-300"
        >
          Link Title
          <input
            required
            type="text"
            id="title"
            name="title"
            placeholder="Your amazing link title"
            className="rounded-lg bg-neutral-800 p-2 outline-none placeholder:text-neutral-500 focus-within:bg-neutral-700"
          />
        </label>

        <label
          htmlFor="url"
          className="flex flex-col gap-2 text-lg font-semibold text-neutral-300"
        >
          Link URL
          <input
            required
            type="url"
            id="url"
            name="url"
            placeholder="Where is this awesome link?"
            className="rounded-lg bg-neutral-800 p-2 outline-none placeholder:text-neutral-500 focus-within:bg-neutral-700"
          />
        </label>

        <label
          htmlFor="description"
          className="flex flex-col gap-2 text-lg font-semibold text-neutral-300"
        >
          Link description
          <textarea
            rows={8}
            id="description"
            name="description"
            placeholder="Describe why is this so cool."
            className="text-md rounded-lg bg-neutral-800 p-2 outline-none placeholder:text-neutral-500 focus-within:bg-neutral-700"
          />
        </label>

        <button
          type="submit"
          className="self-center rounded-md bg-gradient-to-r from-fuchsia-500 to-rose-600 p-0.5 text-lg"
        >
          <span className="flex items-center gap-2 rounded-md bg-neutral-900 px-2 py-1 font-medium text-neutral-100 transition-colors hover:bg-transparent hover:text-neutral-900">
            Create New Link!
          </span>
        </button>
      </form>
    </div>
  );
};

export default New;
