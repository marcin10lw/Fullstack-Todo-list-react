import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container/styled";
import { NotFoundPageSection, GoBackLink } from "./styled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/tasks");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container>
      <NotFoundPageSection>
        <p>Ooops...There is no such page 😥</p>
        <p>We'll redirect you back to tasks in a moment 😄</p>
        <p>
          <GoBackLink to="/tasks">Go back to tasks</GoBackLink>
        </p>
      </NotFoundPageSection>
    </Container>
  );
};

export default NotFoundPage;
