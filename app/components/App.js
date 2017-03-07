const React = require('react');
const Search = require('./Search');

class App extends React.Component {

    getForecast = (zip) => {
        // get forecast from api
    }

    render() {
        return (
            <div>
                <Search search={this.getForecast.bind(this)} />
            </div>
        );
    };
}

module.exports = App;
