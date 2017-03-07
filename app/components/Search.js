const React = require('react');

class Search extends React.Component {

    static propTypes = {
        search: React.PropTypes.func,
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
                <input type="text" onChange={this.inputChanged} />
            </div>
        );
    };
}

module.exports = Search;
