import styled, { css } from "styled-components";

const Container = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;

  ${({ inAuthorPage }) =>
    inAuthorPage &&
    css`
      max-width: 900px;
    `}
`;

export default Container;
