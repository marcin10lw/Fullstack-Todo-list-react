import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Paragraph = styled.p`
  margin: 0;

  &:nth-child(2) {
    margin: 16px 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.teal};

  &:hover {
    color: ${({ theme }) => theme.colors.lightTeal};
    text-decoration: underline;
  }
`;
