import { navigate } from "hookrouter";

export const getNewValidation = (search) => {
  let newValidation = "";
  if (!search) {
    newValidation = "Field tidak boleh kosong";
  }

  return newValidation;
};

export const handleActionSearch = (search, filter, explicit, yearFrom, yearTo) => {
  const replacedSearch = search.replace(/\s/g, "%25");
  if (yearFrom || yearTo) {
    navigate(`/search/${replacedSearch}/${filter}/${explicit}/${yearFrom}/${yearTo}`);
  } else if (explicit) {
    navigate(`/search/${replacedSearch}/${filter}/${explicit}`);
  } else {
    navigate(`/search/${replacedSearch}/${filter}`);
  }
};
