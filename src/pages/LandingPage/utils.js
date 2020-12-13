import { navigate } from "hookrouter";

export const getNewValidation = (search) => {
  let newValidation = "";
  if (!search) {
    newValidation = "Field tidak boleh kosong";
  }

  return newValidation;
};

export const handleActionSearch = (search) => {
  const replacedSearch = search.replace(/\s/g, "%25");
  navigate(`/search/${replacedSearch}`);
};
