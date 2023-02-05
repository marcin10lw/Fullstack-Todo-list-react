import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container/styled";
import { NotFoundPageSection, GoBackLink } from "./styled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/zadania");
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container>
      <NotFoundPageSection>
        <p>Ups...Nie znaleziono takiej podstrony 😥</p>
        <p>Za chwilę przekierujemy Cię do z powrotem do zadań 😄</p>
        <p>
          <GoBackLink to="/zadania">Wróć do zadań</GoBackLink>
        </p>
      </NotFoundPageSection>
    </Container>
  );
};

export default NotFoundPage;
