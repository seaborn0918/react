import './App.css';
import React from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
  return (
      <div className="App">
        <CKEditor editor={ClassicEditor}
                  data={"Hello"}
                  onReady={editor => {
                    console.log(editor, editor.getData());
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log(event, editor, data);
                  }}>

        </CKEditor>
      </div>
  );
}

export default App;
