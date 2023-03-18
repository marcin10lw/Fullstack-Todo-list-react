import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Link } from "./styled";
import { Wrapper } from "../../../common/Wrapper";
import { useLocation } from "react-router-dom";

const AuthorPage = () => {
  const { pathname } = useLocation();

  return (
    <Container inAuthorPage={pathname === "/author"}>
      <Header heading="" />
      <Section
        header="Marcin Augun"
        content={
          <Wrapper>
            <Paragraph>
              Welcome to the <strong>"About"</strong> page in my{" "}
              <strong>Todo List</strong>. This application is part of the{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://youcode.pl/zostawiam-maila/"
              >
                YouCode - Frontend Developer from scratch
              </Link>{" "}
              course.
            </Paragraph>
            <Paragraph>
              I started the course in October 2022 and it was a great decision.
            </Paragraph>
            <Paragraph>
              My interests include programming (mainly frontend and{" "}
              <Link
                href="https://www.arduino.cc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                arduino
              </Link>
              ) and music production.
            </Paragraph>
          </Wrapper>
        }
      />
    </Container>
  );
};

export default AuthorPage;
