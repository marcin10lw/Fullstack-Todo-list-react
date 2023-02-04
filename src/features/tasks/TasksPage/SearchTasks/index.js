import React from "react";
import { Wrapper } from "../../../../common/Wrapper";
import { Input } from "../Input";
import { useSearchParams } from "react-router-dom";

const SearchTasks = () => {
  const [searchParams, setSearchParams] = useSearchParams({ szukaj: "" });
  const query = searchParams.get("szukaj");

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ szukaj: target.value });
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default SearchTasks;
