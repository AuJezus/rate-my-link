"use server";

import { Database } from "@/types_db";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const supabase = createServerComponentClient<Database>({ cookies });

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

export async function getUserData(id: string) {
  const { data: user, error } = await supabase
    .from("profiles")
    .select("username, avatar_url")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return user;
}

export async function getLinkLikeCount(linkId: number) {
  const { error, count } = await supabase
    .from("reactions")
    .select("*", { count: "exact", head: true })
    .eq("link_id", linkId)
    .eq("liked", true);

  if (error) {
    console.error(error);
    throw error;
  }

  return count;
}

export async function getLinkDislikeCount(linkId: number) {
  const { error, count } = await supabase
    .from("reactions")
    .select("*", { count: "exact", head: true })
    .eq("link_id", linkId)
    .eq("liked", false);

  if (error) {
    console.error(error);
    throw error;
  }

  return count;
}

export async function addReaction(linkId: number, liked: boolean) {
  const { data: reaction, error } = await supabase
    .from("reactions")
    .upsert({ link_id: linkId, liked })
    .select();

  if (error) {
    console.error(error);
    throw error;
  }

  revalidatePath("/");

  return reaction;
}

export async function getUserReaction(linkId: number) {
  const session = await getSession();
  const { data: reaction, error } = await supabase
    .from("reactions")
    .select("*")
    .eq("link_id", linkId)
    .eq("user_id", session?.user.id || "")
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return reaction;
}

export async function getUserBookmark(linkId: number) {
  const session = await getSession();
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("user_id", session?.user.id || "")
    .eq("link_id", linkId)
    .limit(1);

  if (error) {
    console.error(error);
    throw error;
  }

  return bookmarks[0];
}

export async function addBookmark(linkId: number) {
  const { data: bookmark, error } = await supabase
    .from("bookmarks")
    .insert({ link_id: linkId });

  if (error) {
    console.error(error);
    throw error;
  }

  return bookmark;
}

export async function deleteBookmark(linkId: number) {
  const session = await getSession();
  const { error } = await supabase
    .from("bookmarks")
    .delete()
    .eq("user_id", session?.user.id || "")
    .eq("link_id", linkId);

  if (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserLinks(userId: string) {
  const { data: links, error } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw error;
  }

  return links;
}

export async function getUserBookmarkLinks(userId: string) {
  const { data: links, error } = await supabase
    .from("bookmarks")
    .select("links(*)")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw error;
  }

  return links.map((link) => link.links);
}
