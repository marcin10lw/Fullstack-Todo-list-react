import styled from "styled-components";

export const Text = styled.div`
  text-align: start;
  margin-top: 6px;

  a {
    color: ${({ theme }) => theme.colors.doveGrey};
    text-decoration: none;
    transition: all 100ms ease-in-out;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;

export const CredentialsInfo = styled.div`
  text-align: start;

  dl {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const DescriptionListGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.teal};
    }
  }

  dt,
  dd {
    display: inline-block;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin: 0;
  }
`;
