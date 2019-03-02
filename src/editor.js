import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {updateText, editorReducer} from './editor-reducer';

class Editor extends Component {
    updateEditor = (event) => {
      this.props.updateEditor(event.target.value);
    }
    render() {
      return (
        <textarea 
          id="editor" 
          value = {this.props.text}
          onChange={this.updateEditor}> </textarea>
      );
  }
};

const mapStateProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEditor: (text) => {
      dispatch(updateText(text));
    }
  }
}
export default connect(mapStateProps,mapDispatchToProps)(Editor);