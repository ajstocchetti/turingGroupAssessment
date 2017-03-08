const React = require('react');
const Day = require('./ForecastDay');

class Forecast extends React.Component {

    static propTypes = {
        data: React.PropTypes.array,
    }

    render() {
        const days = this.props.data.filter((val, index) => {
            // limit to first 3 days
            return (index < 3);
        }).map((fcDay, index) => {
            return (<Day data={fcDay} key={index} />);
        });
        return (<div>{days}</div>);
    };
}

module.exports = Forecast;
