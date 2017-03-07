const React = require('react');
const Day = require('./ForecastDay');

class Forecast extends React.Component {

    static propTypes = {
        data: React.PropTypes.object,
    }

    render() {
        const data = this.props.data;
        let days = null;
        if (data.hasOwnProperty('forecast')
        && data.forecast.hasOwnProperty('simpleforecast')
        && data.forecast.simpleforecast.hasOwnProperty('forecastday')) {
            days = data.forecast.simpleforecast.forecastday.map((fcDay, index) => {
                // TODO: limit to only 3 days
                return (<Day data={fcDay} key={index} />);
            });
        }
        return (<div>{days}</div>);
    };
}

module.exports = Forecast;
