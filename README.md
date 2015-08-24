# react-bootstrap-prompt
prompt dialog for react with bootstrap modal.

## Examples
```js
import React, { PropTypes } from 'react'
import Prompt from 'react-bootstrap-prompt'

class App extends React.Component {
    componentDidMount() {
        this.refs.prompt
        .show('please enter your reason')
        .then(() => {
            //after sure
        })
        .catch(() => {
            //after cancel
        })
    }
    render () {
        return (
            <div>
                <Prompt.Component ref='prompt' sure='Submit' cancel='Cancel' />
                <Children/>
            </div>
        )
    }
}

class Children extends React.Component {
    onClick() {
        Prompt.Actions
        .show('please enter your reason')
        .then(() => {
            //after sure
        })
        .catch(() => {
            //after cancel
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>click</button>
            </div>
        )
    }
}

export default App;
```
