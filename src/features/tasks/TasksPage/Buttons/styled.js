import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;
