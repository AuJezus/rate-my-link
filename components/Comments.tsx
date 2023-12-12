import React, { FC } from "react";

interface CommentsProps {}

export const Comments: FC<CommentsProps> = ({}) => {
  return (
    <div>
      <p className="text-2xl text-neutral-100">Comments</p>
      <p>Comment section</p>
    </div>
  );
};
