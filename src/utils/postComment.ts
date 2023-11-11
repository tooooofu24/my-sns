export const postComment = async (comment: string) => {
  await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ comment }),
  });
};
