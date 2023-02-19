import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectTaskById } from "../tasksSlice";
import Deadline from "./Deadline";
import NotesArea from "./NotesArea";
import { TaskPageContent } from "./styled";
import TaskDate from "./TaskDate";
import TimeLeft from "./TimeLeft";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <Container>
      <Header heading="Szczegóły zadania" />
      <Section
        header={task ? task.content : "Nie ma takiego zadania"}
        content={
          task && (
            <TaskPageContent>
              <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
            </TaskPageContent>
          )
        }
        optionalContent={<TaskDate task={task} />}
      />
      <Section
        header="Deadline"
        content={<Deadline task={task} />}
        optionalContent={<TimeLeft task={task} />}
      />
      <Section header="Notatki" content={<NotesArea task={task} />} />
    </Container>
  );
};

export default TaskPage;
