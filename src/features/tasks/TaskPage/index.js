import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Wrapper } from "../../../common/Wrapper";
import { selectTaskById } from "../tasksSlice";
import Deadline from "./Deadline";
import EditContent from "./EditContent";
import NotesArea from "./NotesArea";
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
        optionalElement={<EditContent task={task} />}
        content={
          task && (
            <Wrapper>
              <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
            </Wrapper>
          )
        }
        optionalContent={task && <TaskDate task={task} />}
      />
      {task && (
        <>
          <Section
            header="Termin"
            content={<Deadline task={task} />}
            optionalContent={
              task.deadline.deadlineDate && <TimeLeft task={task} />
            }
          />
          {/* <Section header="Notatki" content={<NotesArea task={task} />} /> */}
        </>
      )}
    </Container>
  );
};

export default TaskPage;
