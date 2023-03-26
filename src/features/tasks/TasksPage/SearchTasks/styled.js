import styled from "styled-components";
import { MdClear } from "react-icons/md";

export const SearchFlex = styled.div`
  display: flex;
`;

export const ClearIcon = styled(MdClear)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.doveGrey};
`;

export const ClearInput = styled.button`
  display: inline-block;
  border: 2px solid hsl(0, 0%, 84%);
  border-left: none;
  background-color: transparent;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
