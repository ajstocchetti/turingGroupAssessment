const React = require('react');

class Search extends React.Component {

    static propTypes = {
        search: React.PropTypes.func,
        disabled: React.PropTypes.bool,
    }

    inputChanged = (event) => {
        const zip = event.target.value;
        if (zip.length === 5 && typeof this.props.search === 'function') {
            this.props.search(zip);
        }
    }

    render() {
        return (
            <div>
                <label>Enter Zip Code:</label>
                <input type="text" onChange={this.inputChanged} disabled={this.props.disabled} />
            </div>
        );
    };
}

module.exports = Search;
