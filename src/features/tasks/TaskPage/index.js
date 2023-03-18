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
      {task ? (
        <>
          <Header heading="Task details" />
          <Section
            header={task.content}
            optionalElement={<EditContent task={task} />}
            content={
              <Wrapper>
                <strong>Done:</strong> {task.done ? "Yes" : "No"}
              </Wrapper>
            }
            optionalContent={<TaskDate task={task} />}
          />

          <>
            {task.deadline && (
              <Section
                header="Deadline"
                content={<Deadline task={task} />}
                optionalContent={
                  task.deadline.deadlineDate && <TimeLeft task={task} />
                }
              />
            )}
            <Section header="Notes" content={<NotesArea task={task} />} />
          </>
        </>
      ) : (
        <Header heading="There is no such task" />
      )}
    </Container>
  );
};

export default TaskPage;
