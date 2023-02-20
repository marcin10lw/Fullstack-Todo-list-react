import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Wrapper } from "../../../common/Wrapper";
import { selectTaskById } from "../tasksSlice";
import Deadline from "./Deadline";
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
        content={
          task && (
            <Wrapper>
              <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
            </Wrapper>
          )
        }
        optionalContent={<TaskDate task={task} />}
      />
      <Section
        header="Deadline"
        content={<Deadline task={task} />}
        // optionalContent={
        //   !task.done &&
        //   task.deadline.deadlineDate !== "" &&
        //   (!isPassedDeadline ? (
        //     <TimeLeft task={task} timeLeft={timeLeft} />
        //   ) : (
        //     <div>
        //       <TimePassedInfo>Czas minął:</TimePassedInfo>
        //       {task.done ? (
        //         <TaskDoneInfo>Ukończono zadanie</TaskDoneInfo>
        //       ) : (
        //         <TaskNotDoneInfo>Nie ukończono zadania</TaskNotDoneInfo>
        //       )}
        //     </div>
        //   ))
        // }
        optionalContent={
          task.deadline.deadlineDate && !task.done && <TimeLeft task={task} />
        }
      />
      <Section header="Notatki" content={<NotesArea task={task} />} />
    </Container>
  );
};

export default TaskPage;
