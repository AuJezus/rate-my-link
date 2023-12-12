import { RiDislikeFill, RiHeartFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import LinkHeader from "@/components/LinkHeader";
import LinkContent from "@/components/LinkContent";
import { Comments } from "@/components/Comments";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
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
