const React = require('react');

class ForecastDay extends React.Component {

    static propTypes = {
        data: React.PropTypes.object,
    }

    render() {
        return (
            <div>
                <label>Date:</label>{this.props.data.date.pretty}<br />
                <label>High:</label>{this.props.data.high.fahrenheit} &deg;F<br />
                <label>Low:</label>{this.props.data.low.fahrenheit} &deg;F<br />
                <label>Conditions:</label>{this.props.data.contidions}<br />
                <label>Windspeed:</label>{this.props.data.maxwind.mpg} mph<br />
                <label>Humidity:</label>{this.props.data.avehumitidy}%<br />
            </div>
        );
    };
}

module.exports = ForecastDay;
