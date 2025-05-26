const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

  seriesDurations.push({
    title: "Alphas",
      days: 4,
      hours: 10,
      minutes: 0,
  })

  console.log(seriesDurations);

  let totalPercentage = 0;

function calculateSeriesLifePercentage(seriesDurations) {
    const lifespanInYears = 80;
    const minutesInYear = 365 * 24 * 60; 
    const totalLifespanMinutes = lifespanInYears * minutesInYear;
    console.log(totalLifespanMinutes);

      
    for (let i = 0; i < seriesDurations.length; i++) {
      const series = seriesDurations[i];
      
      // Convert each unit to minutes
      const seriesTotalMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
      const seriesPercentage = (seriesTotalMinutes / totalLifespanMinutes) * 100;
      totalPercentage += seriesPercentage;

      console.log("In total that is " + totalPercentage + " % of my life");
}
}

