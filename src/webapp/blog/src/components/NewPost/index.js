import Leftpanel from '../Leftpanel';
import NavBar from '../NavBar';
import './NewPost.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

class NewPost extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
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
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
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
    );
  }
}
export default NewPost