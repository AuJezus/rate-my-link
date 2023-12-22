import React, { FC } from "react";

const New = () => {
  async function createLink(formData: FormData) {
    const rawFormData = {
      title: formData.get("title"),
      url: formData.get("url"),
      description: formData.get("description"),
    };
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
            required
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
