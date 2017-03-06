'use strict';

const memory = {};

function saveForecast(zip, forecast) {
    memory[zip] = {
        upated: new Date(),
        forecast,
    };
}

function getForecast(zip) {
    if (memory.hasOwnProperty(zip)) {
        const updated = memory[zip].updated;
        if (new Date().getTime() - new Date(updated).getTime() <= 3600000) {
            // now is less than 1 hour from last update for zip code
            return memory[zip].forecast;
        }
    }

    return null;
}

module.exports = {
    getForecast,
    saveForecast,
};
