const React = require('react');
const axios = require('axios');
const ErrorBox = require('./ErrorBox');
const Forecast = require('./ForecastDisplay');
const Loader = require('./Loader');
const Search = require('./Search');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            forecast: [],
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
            if (response.hasOwnProperty('data')
            && response.data.hasOwnProperty('forecast')
            && response.data.forecast.hasOwnProperty('simpleforecast')
            && response.data.forecast.simpleforecast.hasOwnProperty('forecastday')) {
                this.setState({
                    loading: false,
                    forecast: response.data.forecast.simpleforecast.forecastday,
                });
            } else throw new Error('Forecase missing');
        }).catch(err => {
            this.setState({
                loading: false,
                forecast: [],
                error: `Unable to retreive forecast for zip code ${zip}`,
            });
        });
    }

    render() {
        return (
            <div style={{ marginTop: '25px' }}>
                <h2>Welcome to TG Weather</h2>
                <Search search={this.getForecast.bind(this)}
                    disabled={this.state.loading} />
                <Loader loading={this.state.loading} />
                <ErrorBox text={this.state.error} />
                <Forecast data={this.state.forecast} />
            </div>
        );
    };
}

module.exports = App;
