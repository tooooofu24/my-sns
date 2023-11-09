export function Footer() {
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const comment = e.currentTarget.comment.value;
  //   if (!comment) return;
  //   mutate(comment);
  //   e.currentTarget.comment.value = "";
  // };

  // const { mutate, isLoading } = useMutation(postComment, {
  //   onSuccess: () => onOpen(),
  //   onError: () => {
  //     alert(
  //       "コメントの投稿に失敗しました🥺\n陶也まで連絡してもらえると助かります！"
  //     );
  //   },
  // });

  return (
    <div className="navbar bottom-0 fixed bg-base-100 z-10">
      <div className="container max-w-md mx-auto">
        <a className="btn btn-ghost normal-case text-xl">千葉陶也</a>
      </div>
    </div>
  );
}
