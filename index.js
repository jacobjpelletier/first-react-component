class HelloWorld extends React.Component {
    render() {
        return React.createElement('div', { id: 'hello-world' }, 'Hello World');
        }
    }
ReactDOM.render(React.createElement(HelloWorld), document.getElementById('root'))