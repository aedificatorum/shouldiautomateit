function Calculator(duration, automationTime, numberOfTimesPerMonth, numberOfMonths = 36, maxSpeedUp = 0.5, maxSlowDown = 3) {
    let rows = [];

    for(let i = 0; i < numberOfMonths; i++) {
        let month = i + 1;
        let timeSaved = duration * numberOfTimesPerMonth * month;
        let maxAutomateTime = automationTime * maxSlowDown;
        let minAutomateTime = automationTime * maxSpeedUp;
        let roiSlow = timeSaved - maxAutomateTime;
        let roiMed = timeSaved - automationTime;
        let roiFast = timeSaved - minAutomateTime;
        let shouldIAutomate = 'No';

        if (roiSlow > 0) {
            shouldIAutomate = 'Definitely'
        } else if (roiMed > 0) {
            shouldIAutomate = 'Probably'
        } else if (roiFast > 0 ) {
            shouldIAutomate = 'Maybe'
        }

        rows.push({
            month,
            timeSaved,
            roiSlow,
            roiMed,
            roiFast,
            shouldIAutomate
          }
        );
    }


    return rows;
}

export default Calculator;