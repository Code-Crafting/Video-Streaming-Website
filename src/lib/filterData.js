import { categoryIds } from "../constants/categoryIds";

export const filterData = (d) => {
  const filteredData = d.filter((el) =>
    categoryIds.some((id) => id === el.snippet.categoryId)
  );
  return filteredData;
};
