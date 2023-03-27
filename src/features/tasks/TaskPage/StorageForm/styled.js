import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

export const AddFile = styled(BsPlusCircle)`
  display: block;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.darkTeal};
  cursor: pointer;
  transition: all 80ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
    transform: scale(1.1);
  }
`;

export const AddFileInput = styled.input`
  display: none;
`;
