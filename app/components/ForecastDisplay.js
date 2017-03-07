const React = require('react');

class Forecast extends React.Component {

    static propTypes = {
        data: React.PropTypes.object,
    }

    render() {
        const data = this.props.data;
        if (data.hasOwnProperty('forecast')
        && data.forecast.hasOwnProperty('simpleforecast')
        && data.forecast.simpleforecast.hasOwnProperty('forecastday')) {
            return (
                <div>
                    <pre>{JSON.stringify(this.props.data.forecast.simpleforecast.forecastday, null, 2)}</pre>
                </div>
            );
        } else return null;
    };
}

module.exports = Forecast;
