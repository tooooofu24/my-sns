import { memo } from "react";
import { Button, Textarea } from "react-daisyui";
import { FaPaperPlane } from "react-icons/fa6";
import { useMutation } from "react-query";

import { SafeArea } from "@/components/SafeArea";
import { postComment } from "@/utils/postComment";

export const Footer = memo(() => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.comment.value;
    if (!comment) return;
    mutate(comment);
    e.currentTarget.comment.value = "";
  };

  const { mutate, isLoading } = useMutation(postComment, {
    onSuccess: () =>
      alert(
        "コメントを投稿しました！\nページに反映されるまで5分程度かかります。"
      ),
    onError: () =>
      alert(
        "コメントの投稿に失敗しました🥺\n陶也まで連絡してもらえると助かります！"
      ),
  });

  return (
    <div className="navbar bottom-0 fixed bg-base-100 z-10 ">
      <div className="container max-w-md mx-auto">
        <form className="flex w-full gap-1 items-center" onSubmit={onSubmit}>
          <Textarea
            bordered
            className="flex-1"
            placeholder="匿名でコメントできます！"
            rows={1}
            name="comment"
            disabled={isLoading}
          ></Textarea>
          <Button
            className="btn-ghost"
            shape="circle"
            type="submit"
            aria-label="送信ボタン"
            loading={isLoading}
          >
            {!isLoading && <FaPaperPlane className="h-5 w-5" />}
          </Button>
        </form>
      </div>
      <SafeArea />
    </div>
  );
});
