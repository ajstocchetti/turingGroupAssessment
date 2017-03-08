const React = require('react');
const Day = require('./ForecastDay');

class Forecast extends React.Component {

    static propTypes = {
        data: React.PropTypes.array,
    }

    render() {
        const days = this.props.data.map((fcDay, index) => {
            // TODO: limit to only 3 days
            return (<Day data={fcDay} key={index} />);
        });
        return (<div>{days}</div>);
    };
}

module.exports = Forecast;
