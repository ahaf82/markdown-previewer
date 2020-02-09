import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './App.css';

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      input: startText
    }
    this.handleChange=this.handleChange.bind(this);
    this.markDown=this.markDown.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  markDown() {
    return {__html: marked(this.state.input)}
  }
  render() {
    return (
      <div>
        <div id="editField" className="text-center">
          <Editor markDown={this.state.input} onChange={this.handleChange}/>
         </div>

        <Preview marked={this.markDown()}/>

        <BackArrow />
      </div>
    )
  }
}

const BackArrow = () => {
  return (
    
    <div id="backwards" className="panel panel-primary">
      <div className="panel-heading text-center"><h2><a href="http://ahaf-dev.com"><i className="fa fa-backward"/>  ahaf-dev</a></h2></div>
    </div>
  )
}

const Editor = (props) => {
  return (
      <div className="panel panel-primary">
        <div className="panel-heading"><h1>Editor</h1></div>
        <div className="panel-body"><textarea id="editor" type="text" className="input-sm" value={props.markDown} onChange={props.onChange} rows="8" cols="50"/></div>
      </div>
  )
}

const Preview = (props) => {
  return (
      <div id="prevWindow" className="panel panel-primary">
        <h1 className="panel-heading text-center">Preview</h1>
        <div id="preview" className="panel-body" dangerouslySetInnerHTML={props.marked}>
        </div>
      </div>
  )
}

const startText =
`# This is my text to start width:
## Welcome to my React Markdown Previewer!

[This is a link to a Markdown demo](https://marked.js.org/demo/?text=)

\`An Inline Element\`

\`\`\`
multiple
backticked
lines
\`\`\`

* here
* is a small
* list

>A blockquote

![image](https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg)

__Some bold text__
`

ReactDOM.render(
  <App/>,
  document.getElementById("content")
);

export default App;
