import LinkHeader from "@/components/LinkHeader";
import LinkContent from "@/components/LinkContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types_db";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: link, error } = await supabase
    .from("random_links")
    .select("*")
    .limit(1)
    .single();

  return (
    <div className="mx-auto w-[80%]">
      <div className="my-4">
        <LinkHeader link={link} />
      </div>

      <div className="mb-12">
        <LinkContent link={link} />
      </div>
    </div>
  );
}
