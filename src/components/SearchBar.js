import React from "react";
import styled from "styled-components";

function SearchBar({ value, onChange }) {
  return (
    <SearchWrapper>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="작품 제목, 작가, 키워드 검색..."
      />
    </SearchWrapper>
  );
}

export default SearchBar;

const SearchWrapper = styled.div`
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
