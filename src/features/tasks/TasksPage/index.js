import AddTaskForm from "./AddTaskForm";
import TasksList from "./TasksList";
import HideDone from "./HideDone";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";
import SearchTasks from "./SearchTasks";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "-50vw",
    scale: 0.8,
    transition: {
      delay: 0.1,
      duration: 0.4,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      when: "beforeChildren",
    },
  },
};

function TasksPage() {
  return (
    <Container
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header heading="Todo List" />
      <Section header="Add new task" content={<AddTaskForm />} />
      <Section header="Search" content={<SearchTasks />} />
      <Section
        header="Tasks"
        optionalContent={<HideDone />}
        content={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
