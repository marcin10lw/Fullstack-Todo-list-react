import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Section from "../../../common/Section";
import { selectTaskById } from "../tasksSlice";
import { TaskPageContent } from "./styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <Container>
      <Section
        header={task ? task.content : "Nie znaleziono zadania"}
        content={
          task && (
            <TaskPageContent>
              Ukończono: <strong>{task.done ? "Tak" : "Nie"}</strong>
            </TaskPageContent>
          )
        }
      />
    </Container>
  );
};

export default TaskPage;
