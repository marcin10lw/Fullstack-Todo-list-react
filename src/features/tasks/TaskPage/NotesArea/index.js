import { useDispatch } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { updateTask } from "../../tasksSlice";
import { useRef } from "react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { NoteSaveButton } from "./styled";

const NotesArea = ({ task }) => {
  const [noteContent, setNoteContent] = useState(task.noteContent);
  const [error, setError] = useState(false);

  const editorRef = useRef(null);
  const taskId = task.id;

  const dispatch = useDispatch();

  const saveNote = () => {
    if (noteContent.trim() === "") {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    dispatch(
      updateTask({
        id: taskId,
        updatedProp: { ["noteContent"]: noteContent },
      })
    );
    setError(false);
  };

  return (
    <Wrapper>
      <Editor
        apiKey={process.env.REACT_APP_API_KEY_TINY}
        onInit={(editor) => (editorRef.current = editor)}
        value={noteContent}
        onEditorChange={(noteValue) => setNoteContent(noteValue)}
        init={{
          height: 300,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-size:16px, border-radius:3px} ",
        }}
      />

      <NoteSaveButton disabled={error} onClick={saveNote}>
        {error ? "Note's content can't be empty" : "Save note"}
      </NoteSaveButton>
    </Wrapper>
  );
};

export default NotesArea;
