import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Link, Wrapper } from "./styled";

const AuthorPage = () => {
  return (
    <Container>
      <Header heading="O autorze" />
      <Section
        header="Marcin Augun"
        content={
          <Wrapper>
            <Paragraph>
              Witam Ciebie na podstronie <strong>"O autorze"</strong> w
              zrobionej przeze mnie <strong>Liście Zadań</strong>. Zadanie to
              jest częścią kursu{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://youcode.pl/zostawiam-maila/"
              >
                YouCode - Frontend Developer od podstaw
              </Link>
              .
            </Paragraph>
            <Paragraph>
              Kurs rozpocząłem w październiku 2022 roku i była to świetna
              decyzja.
            </Paragraph>
            <Paragraph>
              Do moich zainteresowań należą programowanie (głównie frontend i{" "}
              <Link
                href="https://www.arduino.cc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                arduino
              </Link>
              ) i produkcja muzyczna.
            </Paragraph>
          </Wrapper>
        }
      />
    </Container>
  );
};

export default AuthorPage;
