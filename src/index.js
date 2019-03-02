import React, { Component } from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import marked from 'marked';
import './style.css';
import Editor from'./editor';
import Preview from './preview';
import {editorReducer} from './editor-reducer';

const store = createStore(editorReducer);

class Block extends Component {
  constructor(){
      super();
    this.state = {
      expanded: false  
    }
  };
  
  change = () => {
    this.setState({expanded: !this.state.expanded});
  };
  render(){
    return (
      <div
      className={this.state.expanded ? "block expanded" :     "block"} 
      style={{
          width: this.state.expanded ? "auto" : this.props.width,
          height: this.state.expanded ? "auto": this.props.height
      }}>
        <div className="toolBar">
          <i 
            title="no-stack-dub-sack" 
            className="fa  fa-free-code-camp"
          >
          </i>
          <div className="propsText">{this.props.text}</div>   
        <div className={this.state.expanded ? "expandedScale" : "scale"} onClick={this.change}>
          <i id="iconScale" className={this.state.expanded ? "fa fa-compress" : "fa fa-arrows-alt"}>
          </i>
        </div>
      </div>
      <div className="context">
          {this.props.children}
        </div>
      </div>
    );
  }
}
class App extends Component {

  render() {  
    document.body.style.backgroundColor = "#87b5b5";
    return (
      <Provider store={store}>
      <Block text = "Editor" width = "40%" height="150px">
      <Editor />
      </Block>
      <br/>
      <Block text = "Previewer" width = "60%">
      <Preview />
      </Block>
      </Provider>
    );
  }
}
render(<App />, document.getElementById('root'));