import LinkHeader from "@/components/LinkHeader";
import LinkContent from "@/components/LinkContent";
import { Comments } from "@/components/Comments";

export default function Home() {
  return (
    <div className="mx-auto w-[80%]">
      <div className="my-4">
        <LinkHeader />
      </div>

      <div className="mb-12">
        <LinkContent />
      </div>

      <Comments />
    </div>
  );
}
