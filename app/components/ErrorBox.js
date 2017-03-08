const React = require('react');

class ErrorBox extends React.Component {

    static propTypes = {
        text: React.PropTypes.string,
    }

    render() {
        if (!this.props.text) return null; // if no error do not display

        return (<div>{this.props.text}</div>);
    };
}

module.exports = ErrorBox;
