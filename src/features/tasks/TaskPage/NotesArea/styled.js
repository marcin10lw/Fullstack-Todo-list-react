import styled from "styled-components";

export const StyledNotesArea = styled.textarea`
  resize: vertical;
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
  outline: none;
  background-color: transparent;
  width: 100%;
  height: 200px;
  padding: 7px 10px;
  line-height: 1.4;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.teal};
  }
`;
