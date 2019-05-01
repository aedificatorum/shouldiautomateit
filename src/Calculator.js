function Calculator(numberOfMonths = 36) {
    let rows = [];

    for(let i = 0; i < numberOfMonths; i++) {
        rows.push({
            month: i + 1,
            timeSaved: 100,
            roiSlow: -3500,
            roiMed: -1100,
            roiFast: -500,
            shouldIAutomate: "No"
          }
        );
    }

    return rows;
}

export default Calculator;