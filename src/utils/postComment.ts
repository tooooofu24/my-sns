export const postComment = (comment: string) => {
  return fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ comment }),
  });
};
