import {connect} from 'react-redux';
import React, {Component} from 'react';
import './style.css';
import {editorReducer} from 'editor-reducer';
import marked from 'marked';


class Preview extends Component {
  createMarkup() {
    return {
      __html: marked(this.props.text)
    }
  }
  render() {
    var renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
    var link = marked.Renderer.prototype.link.call(this, href, title, text);
    return link.replace("<a","<a target='_blank' ");
};

    marked.setOptions({
      renderer: renderer,
      breaks: true,
    });
    
    return (
      <div 
        id='preview' 
        dangerouslySetInnerHTML={this.createMarkup()}
      />
    );
  }
}

const mapStateProps = (state) => {
  return state;
};

export default connect(mapStateProps)(Preview);