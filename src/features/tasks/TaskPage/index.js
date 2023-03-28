import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Wrapper } from "../../../common/Wrapper";
import { selectTaskById, setTasks } from "../tasksSlice";
import Deadline from "./Deadline";
import EditContent from "../EditContent";
import NotesArea from "./NotesArea";
import TaskDate from "./TaskDate";
import TimeLeft from "./TimeLeft";
import StorageForm from "./StorageForm";
import useFirestore from "../useFirestore";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));
  const data = useFirestore("tasks");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(data));
  }, [data]);

  return (
    <Container>
      {task ? (
        <>
          <Header heading="Task details" optionalContent={true} />
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

          <Section
            header="Deadline"
            content={<Deadline task={task} />}
            optionalContent={task.deadline && <TimeLeft task={task} />}
          />

          <Section header="Notes" content={<NotesArea task={task} />} />

          <Section
            header="Storage"
            optionalContent={<StorageForm taskId={task.id} />}
          />
        </>
      ) : (
        <Header heading="There is no such task" />
      )}
    </Container>
  );
};

export default TaskPage;
