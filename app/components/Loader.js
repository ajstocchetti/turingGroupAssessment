const React = require('react');

class Loader extends React.Component {
    static propTypes = {
        loading: React.PropTypes.bool,
    }

    render() {
        return (this.props.loading ? <img src={'images/loading.gif'} /> : null);
    };
}

module.exports = Loader;
