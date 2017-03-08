const React = require('react');

class ForecastDay extends React.Component {

    static propTypes = {
        data: React.PropTypes.object,
    }

    render() {
        const style = {
            background: '#bbb',
            'borderRadius': '5px',
            padding: '12px',
            'marginBottom': '20px',
        }
        return (
            <div style={style}>
                <h4>{this.props.data.date.pretty}</h4>
                <label>High:</label>{this.props.data.high.fahrenheit} &deg;F<br />
                <label>Low:</label>{this.props.data.low.fahrenheit} &deg;F<br />
                <label>Conditions:</label>{this.props.data.conditions}<br />
                <label>Windspeed:</label>{this.props.data.avewind.mph} mph<br />
                <label>Humidity:</label>{this.props.data.avehumidity}%<br />
            </div>
        );
    };
}

module.exports = ForecastDay;
