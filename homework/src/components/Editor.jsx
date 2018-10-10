import React from 'react';
class Editor extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }
    addInput(e) {
        
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const input = this.state.text
        return (
            <div className="editor">
                <input type="text" value={input} onChange={(e) => { this.addInput(e)}} />
                
              <button onClick={() => {this.props.add(this.state.text);this.setState({text: ''})}}>添加一条</button>
            </div>
        )
    }
}
export default Editor;