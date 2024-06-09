export const formatMemberSince = (inputDateString) => {
  const formattedDate = new Date(inputDateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};
