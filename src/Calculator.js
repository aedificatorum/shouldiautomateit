function Calculator(duration, automationTime, numberOfTimesPerMonth, numberOfMonths = 36, maxSpeedUp = 0.5, maxSlowDown = 3) {
    let rows = [];

    for(let i = 0; i < numberOfMonths; i++) {
        let month = i + 1;
        let timeSaved = duration * numberOfTimesPerMonth * month;
        let maxAutomateTime = automationTime * maxSlowDown;
        let minAutomateTime = automationTime * maxSpeedUp;

        rows.push({
            month,
            timeSaved,
            roiSlow: timeSaved - maxAutomateTime,
            roiMed: timeSaved - automationTime,
            roiFast: timeSaved - minAutomateTime,
            shouldIAutomate: "no"
          }
        );
    }


    return rows;
}

export default Calculator;