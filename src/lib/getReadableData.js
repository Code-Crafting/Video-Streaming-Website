export const getReadableDate = (utc) => {
  const d = new Date(utc);
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .split("/")
    .join("-");
};
