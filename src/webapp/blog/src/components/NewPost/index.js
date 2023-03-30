import Leftpanel from '../Leftpanel';
import NavBar from '../NavBar';
import './NewPost.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import axios from "axios";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

const NewPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }

  function inserirPost() {
    axios.post('http://localhost:8080/internal/post', { title, content })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error.response);
      });
  }

  if (localStorage.getItem('authenticated') === "true") {
    return (
      <>
        <NavBar />
        <Leftpanel />
        <div className='post-area'>
          <div className='title-area'>
            <label>Title</label>
            <input
              className='title-text-area'
              placeholder='Insert Title...'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className='editor'>
            <div className='editor-bar'>
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                className='toolbar'
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                toolbar={{
                  options: ['inline', 'list', 'textAlign', 'history']
                }}
              />
            </div>
          </div>
          <div className='button-position'>
            <button className='post-button' onClick={inserirPost}>Publish</button>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default NewPost;
