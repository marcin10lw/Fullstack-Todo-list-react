import React from "react";
import { Wrapper } from "../../../../common/Wrapper";
import { ClearInput, SearchFlex, ClearIcon } from "./styled";
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
      <SearchFlex>
        <Input
          search
          placeholder="Search..."
          value={query || ""}
          onChange={onInputChange}
        />
        <ClearInput>
          <ClearIcon />
        </ClearInput>
      </SearchFlex>
    </Wrapper>
  );
};

export default SearchTasks;
