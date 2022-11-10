import Leftpanel from '../Leftpanel';
import NavBar from '../NavBar';
import './NewPost.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState,Component } from "react";


import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

const NewPost = () => {
  const [editorState, setEditorState] = useState(" ")
  const [username, setUsername] = useState(" ")
  const [senha, setSenha] = useState(" ")

  const onEditorStateChange = (editorState) => {
    setEditorState({ editorState });
    console.log(editorState)
  }

  console.log(localStorage.getItem('authenticated'))

  if (localStorage.getItem('authenticated') == true) {
    return (
          <>
            <NavBar />
            <Leftpanel />
            <div className='post-area'>
              <div className='title-area'>
                <label>Title</label>
                <input className='title-text-area' placeholder='Insert Title...'></input>
              </div>
              <div className='editor'>
                <div className='editor-bar'>
                  <Editor
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
                <button className='post-button'>Publish</button>
              </div>
            </div>
          </>
        )
  }

  return (
    <h1> CHOLA</h1>
  )



}
export default NewPost