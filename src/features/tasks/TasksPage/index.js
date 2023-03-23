import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./HideDone";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";
import SearchTasks from "./SearchTasks";
import { useDispatch } from "react-redux";
import { auth, db } from "../../../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { setStatus, setTasks } from "../tasksSlice";
import { useEffect } from "react";

function TasksPage() {
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
      <Header heading="Todo List" />
      <Section header="Add new task" content={<Form />} />
      <Section header="Search" content={<SearchTasks />} />
      <Section
        header="Tasks"
        optionalContent={<Buttons />}
        content={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
