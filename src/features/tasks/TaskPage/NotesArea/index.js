import { useDispatch } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { addNoteContent } from "../../tasksSlice";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const NotesArea = ({ task }) => {
  const editorRef = useRef(null);
  const taskId = task.id;

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Editor
        apiKey="fopxtqzer870cih0vmnm8xp3fyt9evpk80jufssdmuy1n4cw"
        onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue="<p>This is the initial content of the editor.</p>"
        value={task.noteContent}
        onEditorChange={(noteValue) =>
          dispatch(addNoteContent({ taskId, noteValue }))
        }
        
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
    </Wrapper>
  );
};

export default NotesArea;
