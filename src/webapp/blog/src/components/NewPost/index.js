import Leftpanel from '../Leftpanel';
import NavBar from '../NavBar';
import './NewPost.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import axios from "axios";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

const config = {
  headers: { Authorization: localStorage.getItem("LoginToken") }
}

const NewPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }

  function inserirPost() {
    axios.post('http://localhost:8080/internal/post', { title, content }, config)
      .then(response => {
        console.log(response);
        window.location.href = '/'; // Redireciona para a main page
      })
      .catch(error => {   // Tratamento de erros
        if (error.response.status === 400) {
          setErrorMessage("Error: Bad Request. Please check the fields.");
        } else if (error.response.status === 501) {
          setErrorMessage("Error, try again.");
        } else {
          console.error(error.response);
          setErrorMessage("Error, try again.");
        }
      });
  }

  // Validação dos campos.
  function validateInput() {
    if (!title) {
      setErrorMessage("Title field is empty.");
      return false;
    }
    if (!content) {
      setErrorMessage("Content field is empty.");
      return false;
    }
    return true;
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
            <button className='post-button' onClick={() => validateInput() && inserirPost()}>Publish</button>
          </div>
          {errorMessage && <p className='error-message-new-post'>{errorMessage}</p>}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default NewPost;
