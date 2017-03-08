const React = require('react');
const axios = require('axios');
const Forecast = require('./ForecastDisplay');
const Loader = require('./Loader');
const Search = require('./Search');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            forecast: {},
            error: '',
        };
    }

    getForecast = (zip) => {
        // get forecast from api
        this.setState({
            loading: true,
            error: '',
        });
        axios.get(`/weather/${zip}`)
        .then(response => {
            this.setState({
                loading: false,
                forecast: response.data,
            });
        }).catch(err => {
            this.setState({
                loading: false,
                forecast: {},
                error: 'Error looking up forecast for zip code',
            });
        });
    }

    render() {
        return (
            <div>
                <Search search={this.getForecast.bind(this)}
                    disabled={this.state.loading} />
                <Loader loading={this.state.loading} />
                <Forecast data={this.state.forecast} />
            </div>
        );
    };
}

module.exports = App;
