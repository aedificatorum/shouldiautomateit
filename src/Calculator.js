function Calculator(duration, automationTime, numberOfTimesPerMonth, numberOfMonths = 36) {
    let rows = [];

    for(let i = 0; i < numberOfMonths; i++) {
        let month = i + 1;
        let timeSaved = duration * numberOfTimesPerMonth * month;
        rows.push({
            month,
            timeSaved,
            roiSlow: timeSaved - automationTime,
            roiMed: timeSaved - automationTime,
            roiFast: timeSaved - automationTime,
            shouldIAutomate: "No"
          }
        );
    }

    return rows;
}

export default Calculator;