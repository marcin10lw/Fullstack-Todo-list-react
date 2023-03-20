import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Wrapper } from "../../../common/Wrapper";
import { auth, db } from "../../../config/firebase";
import { selectTaskById, setStatus, setTasks } from "../tasksSlice";
import Deadline from "./Deadline";
import EditContent from "./EditContent";
import NotesArea from "./NotesArea";
import TaskDate from "./TaskDate";
import TimeLeft from "./TimeLeft";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));

  const dispatch = useDispatch();

  const tasksRef = collection(db, "tasks");

  useEffect(() => {
    dispatch(setStatus("loading"));

    const queryTasks = query(
      tasksRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const unsub = onSnapshot(queryTasks, (snapshot) => {
      let tasks = [];

      snapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setTasks(tasks));
      dispatch(setStatus("success"));
    });

    return () => unsub();
  }, []);

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
