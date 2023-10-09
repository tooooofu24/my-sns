export const postComment = async (comment: string) => {
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ comment }),
  });
  const data = await response.json();
  return data;
};
